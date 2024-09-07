"use client";
import { Container, Text, Title ,Rating, Space, Textarea, Button, Divider, Group, Center, Pagination} from "@mantine/core";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm">Your rating</Title>

      <Rating defaultValue={0} count={5} size="lg"/>

      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        autosize
        minRows={3}

        maxRows={3}
      />

      <Button mt="xs" variant="filled" color="orange">Submit Review</Button>

      <Divider my="md" />

      <Group justify="center" >
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly size="sm"/>
      </Group>

      <Text ta="center" c="dimmed">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider my="md" />

      <Group justify="center" >
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly size="sm"/>
      </Group>

      <Text ta="center" c="dimmed">
        My favourite part is pepperoni
      </Text>

      <Group justify="center" mt="md">
        <Pagination  total={20} boundaries={1} defaultValue={10} variant="filled" color="orange" />
      </Group> 


      <Text ta="center" my="sm" c="dimmed">
        Copyright © 2024 Phirapart Yangna 660610780
      </Text>
    </Container>
  );
}