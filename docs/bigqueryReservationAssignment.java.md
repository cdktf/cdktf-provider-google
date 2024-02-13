# `bigqueryReservationAssignment` Submodule <a name="`bigqueryReservationAssignment` Submodule" id="@cdktf/provider-google.bigqueryReservationAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryReservationAssignment <a name="BigqueryReservationAssignment" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment google_bigquery_reservation_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_reservation_assignment.BigqueryReservationAssignment;

BigqueryReservationAssignment.Builder.create(Construct scope, java.lang.String id)
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
    .assignee(java.lang.String)
    .jobType(java.lang.String)
    .reservation(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BigqueryReservationAssignmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.assignee">assignee</a></code> | <code>java.lang.String</code> | The resource which will use the reservation. E.g. projects/myproject, folders/123, organizations/456. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.jobType">jobType</a></code> | <code>java.lang.String</code> | Types of job, which could be specified when using the reservation. Possible values: JOB_TYPE_UNSPECIFIED, PIPELINE, QUERY. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.reservation">reservation</a></code> | <code>java.lang.String</code> | The reservation for the resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#id BigqueryReservationAssignment#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeouts">BigqueryReservationAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assignee`<sup>Required</sup> <a name="assignee" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.assignee"></a>

- *Type:* java.lang.String

The resource which will use the reservation. E.g. projects/myproject, folders/123, organizations/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#assignee BigqueryReservationAssignment#assignee}

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.jobType"></a>

- *Type:* java.lang.String

Types of job, which could be specified when using the reservation. Possible values: JOB_TYPE_UNSPECIFIED, PIPELINE, QUERY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#job_type BigqueryReservationAssignment#job_type}

---

##### `reservation`<sup>Required</sup> <a name="reservation" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.reservation"></a>

- *Type:* java.lang.String

The reservation for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#reservation BigqueryReservationAssignment#reservation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#id BigqueryReservationAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#location BigqueryReservationAssignment#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#project BigqueryReservationAssignment#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeouts">BigqueryReservationAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#timeouts BigqueryReservationAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.putTimeouts"></a>

```java
public void putTimeouts(BigqueryReservationAssignmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeouts">BigqueryReservationAssignmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryReservationAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_reservation_assignment.BigqueryReservationAssignment;

BigqueryReservationAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_reservation_assignment.BigqueryReservationAssignment;

BigqueryReservationAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_reservation_assignment.BigqueryReservationAssignment;

BigqueryReservationAssignment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_reservation_assignment.BigqueryReservationAssignment;

BigqueryReservationAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BigqueryReservationAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BigqueryReservationAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BigqueryReservationAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BigqueryReservationAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryReservationAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference">BigqueryReservationAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.assigneeInput">assigneeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.jobTypeInput">jobTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.reservationInput">reservationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeouts">BigqueryReservationAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.assignee">assignee</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.jobType">jobType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.reservation">reservation</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.timeouts"></a>

```java
public BigqueryReservationAssignmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference">BigqueryReservationAssignmentTimeoutsOutputReference</a>

---

##### `assigneeInput`<sup>Optional</sup> <a name="assigneeInput" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.assigneeInput"></a>

```java
public java.lang.String getAssigneeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jobTypeInput`<sup>Optional</sup> <a name="jobTypeInput" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.jobTypeInput"></a>

```java
public java.lang.String getJobTypeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `reservationInput`<sup>Optional</sup> <a name="reservationInput" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.reservationInput"></a>

```java
public java.lang.String getReservationInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeouts">BigqueryReservationAssignmentTimeouts</a>

---

##### `assignee`<sup>Required</sup> <a name="assignee" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.assignee"></a>

```java
public java.lang.String getAssignee();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.jobType"></a>

```java
public java.lang.String getJobType();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `reservation`<sup>Required</sup> <a name="reservation" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.reservation"></a>

```java
public java.lang.String getReservation();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryReservationAssignmentConfig <a name="BigqueryReservationAssignmentConfig" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_reservation_assignment.BigqueryReservationAssignmentConfig;

BigqueryReservationAssignmentConfig.builder()
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
    .assignee(java.lang.String)
    .jobType(java.lang.String)
    .reservation(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BigqueryReservationAssignmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.assignee">assignee</a></code> | <code>java.lang.String</code> | The resource which will use the reservation. E.g. projects/myproject, folders/123, organizations/456. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.jobType">jobType</a></code> | <code>java.lang.String</code> | Types of job, which could be specified when using the reservation. Possible values: JOB_TYPE_UNSPECIFIED, PIPELINE, QUERY. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.reservation">reservation</a></code> | <code>java.lang.String</code> | The reservation for the resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#id BigqueryReservationAssignment#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeouts">BigqueryReservationAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assignee`<sup>Required</sup> <a name="assignee" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.assignee"></a>

```java
public java.lang.String getAssignee();
```

- *Type:* java.lang.String

The resource which will use the reservation. E.g. projects/myproject, folders/123, organizations/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#assignee BigqueryReservationAssignment#assignee}

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.jobType"></a>

```java
public java.lang.String getJobType();
```

- *Type:* java.lang.String

Types of job, which could be specified when using the reservation. Possible values: JOB_TYPE_UNSPECIFIED, PIPELINE, QUERY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#job_type BigqueryReservationAssignment#job_type}

---

##### `reservation`<sup>Required</sup> <a name="reservation" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.reservation"></a>

```java
public java.lang.String getReservation();
```

- *Type:* java.lang.String

The reservation for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#reservation BigqueryReservationAssignment#reservation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#id BigqueryReservationAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#location BigqueryReservationAssignment#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#project BigqueryReservationAssignment#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentConfig.property.timeouts"></a>

```java
public BigqueryReservationAssignmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeouts">BigqueryReservationAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#timeouts BigqueryReservationAssignment#timeouts}

---

### BigqueryReservationAssignmentTimeouts <a name="BigqueryReservationAssignmentTimeouts" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_reservation_assignment.BigqueryReservationAssignmentTimeouts;

BigqueryReservationAssignmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#create BigqueryReservationAssignment#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#delete BigqueryReservationAssignment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#create BigqueryReservationAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_reservation_assignment#delete BigqueryReservationAssignment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryReservationAssignmentTimeoutsOutputReference <a name="BigqueryReservationAssignmentTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_reservation_assignment.BigqueryReservationAssignmentTimeoutsOutputReference;

new BigqueryReservationAssignmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeouts">BigqueryReservationAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryReservationAssignment.BigqueryReservationAssignmentTimeouts">BigqueryReservationAssignmentTimeouts</a>

---



