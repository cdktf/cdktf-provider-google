# `managedKafkaTopic` Submodule <a name="`managedKafkaTopic` Submodule" id="@cdktf/provider-google.managedKafkaTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedKafkaTopic <a name="ManagedKafkaTopic" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic google_managed_kafka_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_topic.ManagedKafkaTopic;

ManagedKafkaTopic.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .location(java.lang.String)
    .replicationFactor(java.lang.Number)
    .topicId(java.lang.String)
//  .configs(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .partitionCount(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(ManagedKafkaTopicTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | The cluster name. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | The number of replicas of each partition. A replication factor of 3 is recommended for high availability. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.topicId">topicId</a></code> | <code>java.lang.String</code> | The ID to use for the topic, which will become the final component of the topic's name. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.configs">configs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Configuration for the topic that are overridden from the cluster defaults. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#id ManagedKafkaTopic#id}. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.partitionCount">partitionCount</a></code> | <code>java.lang.Number</code> | The number of partitions in a topic. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#project ManagedKafkaTopic#project}. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#cluster ManagedKafkaTopic#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.location"></a>

- *Type:* java.lang.String

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#location ManagedKafkaTopic#location}

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.replicationFactor"></a>

- *Type:* java.lang.Number

The number of replicas of each partition. A replication factor of 3 is recommended for high availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#replication_factor ManagedKafkaTopic#replication_factor}

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.topicId"></a>

- *Type:* java.lang.String

The ID to use for the topic, which will become the final component of the topic's name.

This value is structured like: 'my-topic-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#topic_id ManagedKafkaTopic#topic_id}

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.configs"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Configuration for the topic that are overridden from the cluster defaults.

The key of the map is a Kafka topic property name, for example: 'cleanup.policy=compact', 'compression.type=producer'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#configs ManagedKafkaTopic#configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#id ManagedKafkaTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partitionCount`<sup>Optional</sup> <a name="partitionCount" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.partitionCount"></a>

- *Type:* java.lang.Number

The number of partitions in a topic.

You can increase the partition count for a topic, but you cannot decrease it. Increasing partitions for a topic that uses a key might change how messages are distributed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#partition_count ManagedKafkaTopic#partition_count}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#project ManagedKafkaTopic#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#timeouts ManagedKafkaTopic#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetConfigs">resetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetPartitionCount">resetPartitionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.putTimeouts"></a>

```java
public void putTimeouts(ManagedKafkaTopicTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a>

---

##### `resetConfigs` <a name="resetConfigs" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetConfigs"></a>

```java
public void resetConfigs()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetId"></a>

```java
public void resetId()
```

##### `resetPartitionCount` <a name="resetPartitionCount" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetPartitionCount"></a>

```java
public void resetPartitionCount()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedKafkaTopic resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_topic.ManagedKafkaTopic;

ManagedKafkaTopic.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_topic.ManagedKafkaTopic;

ManagedKafkaTopic.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_topic.ManagedKafkaTopic;

ManagedKafkaTopic.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_topic.ManagedKafkaTopic;

ManagedKafkaTopic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ManagedKafkaTopic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ManagedKafkaTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ManagedKafkaTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ManagedKafkaTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ManagedKafkaTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference">ManagedKafkaTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.configsInput">configsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.partitionCountInput">partitionCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.replicationFactorInput">replicationFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.topicIdInput">topicIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.configs">configs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.partitionCount">partitionCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.topicId">topicId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.timeouts"></a>

```java
public ManagedKafkaTopicTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference">ManagedKafkaTopicTimeoutsOutputReference</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `configsInput`<sup>Optional</sup> <a name="configsInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.configsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `partitionCountInput`<sup>Optional</sup> <a name="partitionCountInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.partitionCountInput"></a>

```java
public java.lang.Number getPartitionCountInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.replicationFactorInput"></a>

```java
public java.lang.Number getReplicationFactorInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a>

---

##### `topicIdInput`<sup>Optional</sup> <a name="topicIdInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.topicIdInput"></a>

```java
public java.lang.String getTopicIdInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `configs`<sup>Required</sup> <a name="configs" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.configs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `partitionCount`<sup>Required</sup> <a name="partitionCount" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.partitionCount"></a>

```java
public java.lang.Number getPartitionCount();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.topicId"></a>

```java
public java.lang.String getTopicId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopic.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedKafkaTopicConfig <a name="ManagedKafkaTopicConfig" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_topic.ManagedKafkaTopicConfig;

ManagedKafkaTopicConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .location(java.lang.String)
    .replicationFactor(java.lang.Number)
    .topicId(java.lang.String)
//  .configs(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .partitionCount(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(ManagedKafkaTopicTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The cluster name. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.location">location</a></code> | <code>java.lang.String</code> | ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | The number of replicas of each partition. A replication factor of 3 is recommended for high availability. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.topicId">topicId</a></code> | <code>java.lang.String</code> | The ID to use for the topic, which will become the final component of the topic's name. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.configs">configs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Configuration for the topic that are overridden from the cluster defaults. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#id ManagedKafkaTopic#id}. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.partitionCount">partitionCount</a></code> | <code>java.lang.Number</code> | The number of partitions in a topic. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#project ManagedKafkaTopic#project}. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#cluster ManagedKafkaTopic#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

ID of the location of the Kafka resource. See https://cloud.google.com/managed-kafka/docs/locations for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#location ManagedKafkaTopic#location}

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

The number of replicas of each partition. A replication factor of 3 is recommended for high availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#replication_factor ManagedKafkaTopic#replication_factor}

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.topicId"></a>

```java
public java.lang.String getTopicId();
```

- *Type:* java.lang.String

The ID to use for the topic, which will become the final component of the topic's name.

This value is structured like: 'my-topic-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#topic_id ManagedKafkaTopic#topic_id}

---

##### `configs`<sup>Optional</sup> <a name="configs" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.configs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConfigs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Configuration for the topic that are overridden from the cluster defaults.

The key of the map is a Kafka topic property name, for example: 'cleanup.policy=compact', 'compression.type=producer'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#configs ManagedKafkaTopic#configs}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#id ManagedKafkaTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partitionCount`<sup>Optional</sup> <a name="partitionCount" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.partitionCount"></a>

```java
public java.lang.Number getPartitionCount();
```

- *Type:* java.lang.Number

The number of partitions in a topic.

You can increase the partition count for a topic, but you cannot decrease it. Increasing partitions for a topic that uses a key might change how messages are distributed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#partition_count ManagedKafkaTopic#partition_count}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#project ManagedKafkaTopic#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicConfig.property.timeouts"></a>

```java
public ManagedKafkaTopicTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#timeouts ManagedKafkaTopic#timeouts}

---

### ManagedKafkaTopicTimeouts <a name="ManagedKafkaTopicTimeouts" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_topic.ManagedKafkaTopicTimeouts;

ManagedKafkaTopicTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#create ManagedKafkaTopic#create}. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#delete ManagedKafkaTopic#delete}. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#update ManagedKafkaTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#create ManagedKafkaTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#delete ManagedKafkaTopic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/managed_kafka_topic#update ManagedKafkaTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedKafkaTopicTimeoutsOutputReference <a name="ManagedKafkaTopicTimeoutsOutputReference" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.managed_kafka_topic.ManagedKafkaTopicTimeoutsOutputReference;

new ManagedKafkaTopicTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.managedKafkaTopic.ManagedKafkaTopicTimeouts">ManagedKafkaTopicTimeouts</a>

---



