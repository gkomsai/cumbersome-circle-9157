import { Box,Heading,Text } from '@chakra-ui/react'
import React from 'react'
import { tourText } from './TourReview'
import Review from "./Review"
import ReactPlayer from 'react-player'

const Visuals = () => {
  return (
    <Box>
        <Heading size="sm" pt={"200px"} fontWeight={"500"} fontSize="35px" textAlign={"center"}>
        Visual projects and employee scheduling
      </Heading>
      <Heading size="sm" pt={"8px"} fontWeight={"400"} fontSize="20px" color={"grey"} textAlign={"center"}>
        Map out your plans and see them with clarity
      </Heading>
      <Box display={"flex"} justifyContent={"center"} p={"40px 0px"}>
      <ReactPlayer m="1rem 0 1rem 0" width='74rem' height="50rem" controls url="https://youtu.be/-8vrEFdmA40"/>
      </Box>
      <Box display={"Grid"} gridTemplateColumns={{base: "repeat(2, 200px)", md: "repeat(2, 300px)", lg: "repeat(3, 300px)",}}
        gridTemplateRows={"repeat(250px , auto)"} height={"auto"} gap={"5%"} padding={"30px 20px"} justifyContent={"space-around"}>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">Visualize</Heading>
          <br />
          <Text fontSize="md">View an interactive plan with your team’s schedule or project portfolio on one pag</Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Plan vs reported
          </Heading>
          <br />
          <Text fontSize="md">
            See the progress of logged time vs. scheduled time of every team
            member.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Resource availability
          </Heading>
          <br />
          <Text fontSize="md">
            Know when someone with the necessary expertise will be available for
            a new project.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Absence
          </Heading>
          <br />
          <Text fontSize="md">
            Add your team’s leave or holidays to the schedule to keep records
            and avoid conflicts.
          </Text>
          <br />
        </Box>
        <Box>
          <Heading size="lg" fontSize="20px">
            Filter
          </Heading>
          <br />
          <Text fontSize="md">
            Zoom in & out, search, filter and sort to quickly view specific team
            members and assignments.
          </Text>
          <br />
        </Box>
        <Box>
          <Heading size="lg" fontSize="20px">
            Avoid overbooking
          </Heading>
          <br />
          <Text fontSize="md">
            Configure weekly capacity and see who’s overbooked and who can take
            on more.
          </Text>
          <br />
        </Box>
      </Box>



      <Heading
        size="sm"
        pt={"200px"}
        fontWeight={"500"}
        fontSize="35px"
        // color={"grey"}
        textAlign={"center"}
      >
        Team management
      </Heading>
      <Heading
        size="sm"
        pt={"8px"}
        fontWeight={"400"}
        fontSize="20px"
        color={"grey"}
        textAlign={"center"}
      >
        Your team's working hours, now more organized and easy to read
      </Heading>
      <Box display={"flex"} justifyContent={"center"} p={"40px 0px"}>
      <ReactPlayer m="1rem 0 1rem 0" width='74rem' height="50rem" controls url="https://www.youtube.com/watch?v=Qhxu9wKoldY"/>

      </Box>
      <Box
        display={"Grid"}
        gridTemplateColumns={{
          base: "repeat(2, 200px)",
          md: "repeat(2, 300px)",
          lg: "repeat(3, 300px)",
        }}
        gridTemplateRows={"repeat(250px , auto)"}
        height={"auto"}
        gap={"5%"}
        padding={"30px 20px"}
        justifyContent={"space-around"}
      >
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Summary charts
          </Heading>
          <br />
          <Text fontSize="md">
            Quickly evaluate what is going on in your team, and how everyone is
            performing.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Time approval
          </Heading>
          <br />
          <Text fontSize="md">
            Be notified when someone submits timesheets for approval. Lock
            further editing.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Lock time editing
          </Heading>
          <br />
          <Text fontSize="md">
            Set a rule to prevent members editing time entries after a certain
            period.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Correct employee time
          </Heading>
          <br />
          <Text fontSize="md">
            Admins can easily edit time on behalf of their team members if there
            was a mistake.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Time log
          </Heading>
          <br />
          <Text fontSize="md">
            All changes and estimates made to the task time are logged and
            available for revision.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Roles and permissions
          </Heading>
          <br />
          <Text fontSize="md">
            Control the access of different users in your team to features and
            data.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Deactivating users
          </Heading>
          <br />
          <Text fontSize="md">
            Deactivate any user but still see all their logged time in reports.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Team groups
          </Heading>
          <br />
          <Text fontSize="md">
            Group organization members into teams that reflect your company
            structure.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Max hours limits
          </Heading>
          <br />
          <Text fontSize="md">
            Set the maximum number of hours a contractor can report. Set it
            daily, weekly or monthly.
          </Text>
          <br />
        </Box>
      </Box>


      <Heading
        size="sm"
        pt={"200px"}
        fontWeight={"500"}
        fontSize="35px"
        // color={"grey"}
        textAlign={"center"}
      >
        Tracking expenses
      </Heading>
      <Heading
        size="sm"
        pt={"8px"}
        fontWeight={"400"}
        fontSize="20px"
        color={"grey"}
        textAlign={"center"}
      >
        Track work-related expenses, reimburse employees, use in budgets, add to
        invoices
      </Heading>
      <Box display={"flex"} justifyContent={"center"} p={"40px 0px"}>
      <ReactPlayer m="1rem 0 1rem 0" width='74rem' height="50rem" controls url="https://www.youtube.com/watch?v=8doBnz9Jbas"/>

      </Box>
      <Box
        display={"Grid"}
        gridTemplateColumns={{
          base: "repeat(2, 200px)",
          md: "repeat(2, 300px)",
          lg: "repeat(3, 300px)",
        }}
        gridTemplateRows={"repeat(250px , auto)"}
        height={"auto"}
        gap={"5%"}
        padding={"30px 20px"}
        justifyContent={"space-around"}
      >
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Track expenses
          </Heading>
          <br />
          <Text fontSize="md">
            Track work-related expenses such as materials, travel, and others
            incurred on the job.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Attach receipts
          </Heading>
          <br />
          <Text fontSize="md">
            Upload and save a receipt when you add an expense.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Unit pricing
          </Heading>
          <br />
          <Text fontSize="md">
            Instead of entering the bare sum, switch on the unit price per
            expense category.
          </Text>
          <br />
        </Box>
      </Box>

    

      <Heading
        size="sm"
        pt={"200px"}
        fontWeight={"500"}
        fontSize="35px"
        // color={"grey"}
        textAlign={"center"}
      >
        Reports and dashboards
      </Heading>
      <Heading
        size="sm"
        pt={"8px"}
        fontWeight={"400"}
        fontSize="20px"
        color={"grey"}
        textAlign={"center"}
      >
        Analytics to aid productivity or boost confidence with your clients
      </Heading>
      <Box display={"flex"} justifyContent={"center"} p={"40px 0px"}>
      <ReactPlayer m="1rem 0 1rem 0" width='74rem' height="50rem" controls url="https://www.youtube.com/watch?v=Pn0-y3vfBDY"/>

      </Box>
      <Box
        display={"Grid"}
        gridTemplateColumns={{
          base: "repeat(2, 200px)",
          md: "repeat(2, 300px)",
          lg: "repeat(3, 300px)",
        }}
        gridTemplateRows={"repeat(250px , auto)"}
        height={"auto"}
        gap={"5%"}
        padding={"30px 20px"}
        justifyContent={"space-around"}
      >
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Custom reports
          </Heading>
          <br />
          <Text fontSize="md">
            Use filters, arrange columns, and add conditions to get the reports
            you need.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Meta data
          </Heading>
          <br />
          <Text fontSize="md">
            Analyze tasks deeper with access to such meta information as tags,
            task types or milestones.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Sharing
          </Heading>
          <br />
          <Text fontSize="md">
            Make any report private or share it with a group of teammates.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Download
          </Heading>
          <br />
          <Text fontSize="md">
            Export your data to send them to the client or to do some internal
            math.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Highlighting
          </Heading>
          <br />
          <Text fontSize="md">
            Highlight various pieces of data in individual cells of your
            reports.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Schedule by email
          </Heading>
          <br />
          <Text fontSize="md">
            Schedule any report to be sent to a list of specified emails on a
            daily, weekly, or monthly basis.
          </Text>
          <br />
        </Box>
      </Box>


      <Heading
        size="sm"
        pt={"200px"}
        fontWeight={"500"}
        fontSize="35px"
        // color={"grey"}
        textAlign={"center"}
      >
        Sending invoices
      </Heading>
      <Heading
        size="sm"
        pt={"8px"}
        fontWeight={"400"}
        fontSize="20px"
        color={"grey"}
        textAlign={"center"}
      >
        Easily create an invoice based on tracked time and expenses
      </Heading>
      <Box display={"flex"} justifyContent={"center"} p={"40px 0px"}>
      <ReactPlayer m="1rem 0 1rem 0" width='74rem' height="50rem" controls url="https://www.youtube.com/watch?v=gOMrnWWXpQw"/>

      </Box>
      <Box
        display={"Grid"}
        gridTemplateColumns={{
          base: "repeat(2, 200px)",
          md: "repeat(2, 300px)",
          lg: "repeat(3, 300px)",
        }}
        b
        height={"auto"}
        gap={"5%"}
        padding={"30px 20px"}
        justifyContent={"space-around"}
      >
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Create invoices
          </Heading>
          <br />
          <Text fontSize="md">
            Easily create an invoice based on tracked time and expenses.
          </Text>

          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Flexible grouping
          </Heading>
          <br />
          <Text fontSize="md">
            Use special dynamic variables, that will be replaced with a real
            data in the invoice line items.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Change language
          </Heading>
          <br />
          <Text fontSize="md">
            English language is used by default, but you can translate any
            invoice label.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Copy invoices
          </Heading>
          <br />
          <Text fontSize="md">
            Connect with QuickBooks, Xero or FreshBooks to sync your clients and
            copy invoices.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Track opens
          </Heading>
          <br />
          <Text fontSize="md">
            We show you the exact time a client opens the invoice email you sent
            them.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Download
          </Heading>
          <br />
          <Text fontSize="md">
            Make the final check of your future invoice and download a PDF file.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Internal notes
          </Heading>
          <br />
          <Text fontSize="md">
            Add internal only, not for customers access, notes on invoices about
            cost of product or code for future invoices.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Log changes
          </Heading>
          <br />
          <Text fontSize="md">
            All invoices have a log so that you can see which users have changed
            what and when.
          </Text>
          <br />
        </Box>
        <Box textAlign={"start"} borderBottom={"1px solid gray"}>
          <Heading size="lg" fontSize="20px">
            Integrations
          </Heading>
          <br />
          <Text fontSize="md">
            Connect with QuickBooks or Xero to sync your clients and copy
            invoices.
          </Text>
          <br />
        </Box>
      </Box>

      <Heading
        size="sm"
        pt={"200px"}
        fontWeight={"500"}
        fontSize="39px"
        // color={"grey"}
        textAlign={"center"}
      >
        You are in a good company
      </Heading>
      <Heading
        width={{ base: "300px", md: "500px", lg: "800px" }}
        size="sm"
        pt={"8px"}
        fontWeight={"400"}
        fontSize="21px"
        color={"grey"}
        margin={"auto"}
        textAlign={"center"}
      >
        We could tell you about the thousands of companies worldwide that use
        our software for their timekeeping needs… but we thought it best they
        speak for themselves.
      </Heading>
      <br />
      <br />
      <br />
      <br />
      <Review tourText={tourText} />
      
    </Box>
  )
}

export default Visuals
