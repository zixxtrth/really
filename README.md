## Really 1.0

Really is javascript Library for create flat UI Notifications 

### installation

- [GitHub](https://github.com/zixxtrth/really)
- bower : 'bower install really'

### Dependence :
- [jQuery](https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js)

### Usage :
            'really.default('Message body', duration);'

            'really.warn('Message body', duration);'
            
            'really.attention('Message body', duration);'

            'really.success('Message body', duration);'
         
            'really.close();'
   

        
  <table class="table table-bordered " style="width:50%;margin:1em 0px;">
            <tr>
                <th>function</th>
                <th>parameter</th>
            </tr>
            <tr>
                <td>warn</td>
                <td class="text-left"> the message body , show duration in seconds (1000 = 1 sec)</td>
            </tr>
            <tr>
                <td>attention</td>
                <td class="text-left"> the message body , show duration in seconds (1000 = 1 sec)</td>
            </tr>
            <tr>
                <td>deafult</td>
                <td class="text-left"> the message body , show duration in seconds (1000 = 1 sec)</td>
            </tr>
            <tr>
                <td>success</td>
                <td class="text-left"> the message body , show duration in seconds (1000 = 1 sec)</td>
            </tr>
            <tr>
                <td>close</td>
                <td class="text-left">-</td>
            </tr>
        </table>
**if the duration is null the alert will be shown for 3 sec as a stander time**
