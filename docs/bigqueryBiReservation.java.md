# `bigqueryBiReservation` Submodule <a name="`bigqueryBiReservation` Submodule" id="@cdktf/provider-google.bigqueryBiReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryBiReservation <a name="BigqueryBiReservation" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation google_bigquery_bi_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_bi_reservation.BigqueryBiReservation;

BigqueryBiReservation.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
//  .id(java.lang.String)
//  .preferredTables(IResolvable)
//  .preferredTables(java.util.List<BigqueryBiReservationPreferredTables>)
//  .project(java.lang.String)
//  .size(java.lang.Number)
//  .timeouts(BigqueryBiReservationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | LOCATION_DESCRIPTION. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#id BigqueryBiReservation#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.preferredTables">preferredTables</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>></code> | preferred_tables block. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#project BigqueryBiReservation#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.size">size</a></code> | <code>java.lang.Number</code> | Size of a reservation, in bytes. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

LOCATION_DESCRIPTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#location BigqueryBiReservation#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#id BigqueryBiReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preferredTables`<sup>Optional</sup> <a name="preferredTables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.preferredTables"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>>

preferred_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#preferred_tables BigqueryBiReservation#preferred_tables}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#project BigqueryBiReservation#project}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.size"></a>

- *Type:* java.lang.Number

Size of a reservation, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#size BigqueryBiReservation#size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#timeouts BigqueryBiReservation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putPreferredTables">putPreferredTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetPreferredTables">resetPreferredTables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetSize">resetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPreferredTables` <a name="putPreferredTables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putPreferredTables"></a>

```java
public void putPreferredTables(IResolvable OR java.util.List<BigqueryBiReservationPreferredTables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putPreferredTables.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putTimeouts"></a>

```java
public void putTimeouts(BigqueryBiReservationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetId"></a>

```java
public void resetId()
```

##### `resetPreferredTables` <a name="resetPreferredTables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetPreferredTables"></a>

```java
public void resetPreferredTables()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetProject"></a>

```java
public void resetProject()
```

##### `resetSize` <a name="resetSize" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetSize"></a>

```java
public void resetSize()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryBiReservation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_bi_reservation.BigqueryBiReservation;

BigqueryBiReservation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_bi_reservation.BigqueryBiReservation;

BigqueryBiReservation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_bi_reservation.BigqueryBiReservation;

BigqueryBiReservation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_bi_reservation.BigqueryBiReservation;

BigqueryBiReservation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BigqueryBiReservation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BigqueryBiReservation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BigqueryBiReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BigqueryBiReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryBiReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.preferredTables">preferredTables</a></code> | <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList">BigqueryBiReservationPreferredTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference">BigqueryBiReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.preferredTablesInput">preferredTablesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `preferredTables`<sup>Required</sup> <a name="preferredTables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.preferredTables"></a>

```java
public BigqueryBiReservationPreferredTablesList getPreferredTables();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList">BigqueryBiReservationPreferredTablesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.timeouts"></a>

```java
public BigqueryBiReservationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference">BigqueryBiReservationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `preferredTablesInput`<sup>Optional</sup> <a name="preferredTablesInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.preferredTablesInput"></a>

```java
public java.lang.Object getPreferredTablesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryBiReservationConfig <a name="BigqueryBiReservationConfig" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_bi_reservation.BigqueryBiReservationConfig;

BigqueryBiReservationConfig.builder()
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
    .location(java.lang.String)
//  .id(java.lang.String)
//  .preferredTables(IResolvable)
//  .preferredTables(java.util.List<BigqueryBiReservationPreferredTables>)
//  .project(java.lang.String)
//  .size(java.lang.Number)
//  .timeouts(BigqueryBiReservationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.location">location</a></code> | <code>java.lang.String</code> | LOCATION_DESCRIPTION. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#id BigqueryBiReservation#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.preferredTables">preferredTables</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>></code> | preferred_tables block. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#project BigqueryBiReservation#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.size">size</a></code> | <code>java.lang.Number</code> | Size of a reservation, in bytes. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

LOCATION_DESCRIPTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#location BigqueryBiReservation#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#id BigqueryBiReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preferredTables`<sup>Optional</sup> <a name="preferredTables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.preferredTables"></a>

```java
public java.lang.Object getPreferredTables();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>>

preferred_tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#preferred_tables BigqueryBiReservation#preferred_tables}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#project BigqueryBiReservation#project}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Size of a reservation, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#size BigqueryBiReservation#size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationConfig.property.timeouts"></a>

```java
public BigqueryBiReservationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#timeouts BigqueryBiReservation#timeouts}

---

### BigqueryBiReservationPreferredTables <a name="BigqueryBiReservationPreferredTables" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_bi_reservation.BigqueryBiReservationPreferredTables;

BigqueryBiReservationPreferredTables.builder()
//  .datasetId(java.lang.String)
//  .projectId(java.lang.String)
//  .tableId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the dataset in the above project. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The assigned project ID of the project. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.tableId">tableId</a></code> | <code>java.lang.String</code> | The ID of the table in the above dataset. |

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the dataset in the above project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#dataset_id BigqueryBiReservation#dataset_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The assigned project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#project_id BigqueryBiReservation#project_id}

---

##### `tableId`<sup>Optional</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

The ID of the table in the above dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#table_id BigqueryBiReservation#table_id}

---

### BigqueryBiReservationTimeouts <a name="BigqueryBiReservationTimeouts" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_bi_reservation.BigqueryBiReservationTimeouts;

BigqueryBiReservationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#create BigqueryBiReservation#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#delete BigqueryBiReservation#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#update BigqueryBiReservation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#create BigqueryBiReservation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#delete BigqueryBiReservation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/bigquery_bi_reservation#update BigqueryBiReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryBiReservationPreferredTablesList <a name="BigqueryBiReservationPreferredTablesList" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_bi_reservation.BigqueryBiReservationPreferredTablesList;

new BigqueryBiReservationPreferredTablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.get"></a>

```java
public BigqueryBiReservationPreferredTablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>>

---


### BigqueryBiReservationPreferredTablesOutputReference <a name="BigqueryBiReservationPreferredTablesOutputReference" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_bi_reservation.BigqueryBiReservationPreferredTablesOutputReference;

new BigqueryBiReservationPreferredTablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetTableId">resetTableId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetId` <a name="resetDatasetId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetTableId` <a name="resetTableId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.resetTableId"></a>

```java
public void resetTableId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.tableId">tableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.tableIdInput"></a>

```java
public java.lang.String getTableIdInput();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.tableId"></a>

```java
public java.lang.String getTableId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTablesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationPreferredTables">BigqueryBiReservationPreferredTables</a>

---


### BigqueryBiReservationTimeoutsOutputReference <a name="BigqueryBiReservationTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_bi_reservation.BigqueryBiReservationTimeoutsOutputReference;

new BigqueryBiReservationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryBiReservation.BigqueryBiReservationTimeouts">BigqueryBiReservationTimeouts</a>

---



