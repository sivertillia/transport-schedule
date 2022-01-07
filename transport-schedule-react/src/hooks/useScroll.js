import { MutableRefObject, useLayoutEffect, useRef, useState } from 'react'

export default function useScroll(parentRef, childRef, rootMargin = '0px') {
  const observer = useRef()
  const [isIntersecting, setStateIntersecting] = useState(false)

  useLayoutEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: rootMargin,
      threshold: 0,
    }
    const callback = (entries) => {
      const [target] = entries
      if (target.isIntersecting) {
        setStateIntersecting(true)
      }
      if (!target.isIntersecting) {
        if (target.boundingClientRect.y > 0) {
          setStateIntersecting(false)
        }
      }
    }
    observer.current = new IntersectionObserver(callback, options)

    observer.current.observe(childRef.current)

    return function () {
      if (childRef.current)
        observer.current.unobserve(childRef.current)
    }
  }, [])

  return [isIntersecting]
}
