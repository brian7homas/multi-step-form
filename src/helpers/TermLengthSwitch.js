const TermLengthSwtich = (e, setPlan, plan) => {
  if (e.target.checked) {
    switch (plan.name) {
      case 'Arcade':
        setPlan({
          name: plan.name,
          term: [
            {
              length: 'monthly',
              price: '$9/mo'
            },
            {
              length: 'yearly',
              price: '$90/yr'
            },
          ],
          termUser: [
            {
              length: 'yearly',
              price: '$90/yr'
            },
            {
              length: 'yearly',
              price: '$120/yr'
            },
            {
              length: 'yearly',
              price: '$150/yr'
            },
          ],
        })
        break
      case 'Advanced':
        setPlan({
          name: plan.name,
          term: [
            {
              length: 'monthly',
              price: '$12/mo'
            },
            {
              length: 'yearly',
              price: '$120/yr'
            },
          ],
          termUser: [
            {
              length: 'yearly',
              price: '$120/yr'
            },
          ],
        })
        break
      case 'Pro':
        setPlan({
          name: plan.name,
          term: [
            {
              length: 'monthly',
              price: '$15/mo'
            },
            {
              length: 'yearly',
              price: '$150/yr'
            },
          ],
          termUser: [
            {
              length: 'yearly',
              price: '$150/yr'
            },
          ],
        })
        break
    }
  } else {
    switch (plan.name) {
      case 'Arcade':
        setPlan({
          name: plan.name,
          term: [
            {
              length: 'monthly',
              price: '$9/mo'
            },
            {
              length: 'yearly',
              price: '$90/yr'
            },
          ],
          termUser: [
            {
              length: 'monthly',
              price: '$9/mo'
            },
          ],
        })
        break
      case 'Advanced':
        setPlan({
          name: plan.name,
          term: [
            {
              length: 'monthly',
              price: '$12/mo'
            },
            {
              length: 'yearly',
              price: '$120/yr'
            },
          ],
          termUser: [
            {
              length: 'monthly',
              price: '$12/mo'
            },
          ],
        })
        break
      case 'Pro':
        setPlan({
          name: plan.name,
          term: [
            {
              length: 'monthly',
              price: '$15/mo'
            },
            {
              length: 'yearly',
              price: '$150/yr'
            },
          ],
          termUser: [
            {
              length: 'monthly',
              price: '$15/mo'
            },
          ],
        })
        break
    }
  }
}

export default TermLengthSwtich