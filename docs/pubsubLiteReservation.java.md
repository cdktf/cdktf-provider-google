# `pubsubLiteReservation` Submodule <a name="`pubsubLiteReservation` Submodule" id="@cdktf/provider-google.pubsubLiteReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PubsubLiteReservation <a name="PubsubLiteReservation" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation google_pubsub_lite_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_reservation.PubsubLiteReservation;

PubsubLiteReservation.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .throughputCapacity(java.lang.Number)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(PubsubLiteReservationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the reservation. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.throughputCapacity">throughputCapacity</a></code> | <code>java.lang.Number</code> | The reserved throughput capacity. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#id PubsubLiteReservation#id}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#project PubsubLiteReservation#project}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the pubsub lite reservation. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts">PubsubLiteReservationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#name PubsubLiteReservation#name}

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.throughputCapacity"></a>

- *Type:* java.lang.Number

The reserved throughput capacity.

Every unit of throughput capacity is
equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed
messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#throughput_capacity PubsubLiteReservation#throughput_capacity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#id PubsubLiteReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#project PubsubLiteReservation#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the pubsub lite reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#region PubsubLiteReservation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts">PubsubLiteReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#timeouts PubsubLiteReservation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.putTimeouts"></a>

```java
public void putTimeouts(PubsubLiteReservationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts">PubsubLiteReservationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PubsubLiteReservation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_reservation.PubsubLiteReservation;

PubsubLiteReservation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_reservation.PubsubLiteReservation;

PubsubLiteReservation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_reservation.PubsubLiteReservation;

PubsubLiteReservation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_reservation.PubsubLiteReservation;

PubsubLiteReservation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PubsubLiteReservation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PubsubLiteReservation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PubsubLiteReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PubsubLiteReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PubsubLiteReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference">PubsubLiteReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.throughputCapacityInput">throughputCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts">PubsubLiteReservationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.throughputCapacity">throughputCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.timeouts"></a>

```java
public PubsubLiteReservationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference">PubsubLiteReservationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `throughputCapacityInput`<sup>Optional</sup> <a name="throughputCapacityInput" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.throughputCapacityInput"></a>

```java
public java.lang.Number getThroughputCapacityInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts">PubsubLiteReservationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.throughputCapacity"></a>

```java
public java.lang.Number getThroughputCapacity();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PubsubLiteReservationConfig <a name="PubsubLiteReservationConfig" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_reservation.PubsubLiteReservationConfig;

PubsubLiteReservationConfig.builder()
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
    .name(java.lang.String)
    .throughputCapacity(java.lang.Number)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(PubsubLiteReservationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the reservation. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.throughputCapacity">throughputCapacity</a></code> | <code>java.lang.Number</code> | The reserved throughput capacity. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#id PubsubLiteReservation#id}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#project PubsubLiteReservation#project}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the pubsub lite reservation. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts">PubsubLiteReservationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#name PubsubLiteReservation#name}

---

##### `throughputCapacity`<sup>Required</sup> <a name="throughputCapacity" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.throughputCapacity"></a>

```java
public java.lang.Number getThroughputCapacity();
```

- *Type:* java.lang.Number

The reserved throughput capacity.

Every unit of throughput capacity is
equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed
messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#throughput_capacity PubsubLiteReservation#throughput_capacity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#id PubsubLiteReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#project PubsubLiteReservation#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the pubsub lite reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#region PubsubLiteReservation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationConfig.property.timeouts"></a>

```java
public PubsubLiteReservationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts">PubsubLiteReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#timeouts PubsubLiteReservation#timeouts}

---

### PubsubLiteReservationTimeouts <a name="PubsubLiteReservationTimeouts" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_reservation.PubsubLiteReservationTimeouts;

PubsubLiteReservationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#create PubsubLiteReservation#create}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#delete PubsubLiteReservation#delete}. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#update PubsubLiteReservation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#create PubsubLiteReservation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#delete PubsubLiteReservation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_lite_reservation#update PubsubLiteReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PubsubLiteReservationTimeoutsOutputReference <a name="PubsubLiteReservationTimeoutsOutputReference" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.pubsub_lite_reservation.PubsubLiteReservationTimeoutsOutputReference;

new PubsubLiteReservationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts">PubsubLiteReservationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.pubsubLiteReservation.PubsubLiteReservationTimeouts">PubsubLiteReservationTimeouts</a>

---



