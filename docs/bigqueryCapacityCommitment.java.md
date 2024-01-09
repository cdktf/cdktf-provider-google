# `bigqueryCapacityCommitment` Submodule <a name="`bigqueryCapacityCommitment` Submodule" id="@cdktf/provider-google.bigqueryCapacityCommitment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryCapacityCommitment <a name="BigqueryCapacityCommitment" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment google_bigquery_capacity_commitment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_capacity_commitment.BigqueryCapacityCommitment;

BigqueryCapacityCommitment.Builder.create(Construct scope, java.lang.String id)
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
    .plan(java.lang.String)
    .slotCount(java.lang.Number)
//  .capacityCommitmentId(java.lang.String)
//  .edition(java.lang.String)
//  .enforceSingleAdminProjectPerOrg(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .renewalPlan(java.lang.String)
//  .timeouts(BigqueryCapacityCommitmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.plan">plan</a></code> | <code>java.lang.String</code> | Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.slotCount">slotCount</a></code> | <code>java.lang.Number</code> | Number of slots in this commitment. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.capacityCommitmentId">capacityCommitmentId</a></code> | <code>java.lang.String</code> | The optional capacity commitment ID. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.edition">edition</a></code> | <code>java.lang.String</code> | The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.enforceSingleAdminProjectPerOrg">enforceSingleAdminProjectPerOrg</a></code> | <code>java.lang.String</code> | If true, fail the request if another project in the organization has a capacity commitment. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#id BigqueryCapacityCommitment#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#project BigqueryCapacityCommitment#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.renewalPlan">renewalPlan</a></code> | <code>java.lang.String</code> | The plan this capacity commitment is converted to after commitmentEndTime passes. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.plan"></a>

- *Type:* java.lang.String

Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#plan BigqueryCapacityCommitment#plan}

---

##### `slotCount`<sup>Required</sup> <a name="slotCount" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.slotCount"></a>

- *Type:* java.lang.Number

Number of slots in this commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#slot_count BigqueryCapacityCommitment#slot_count}

---

##### `capacityCommitmentId`<sup>Optional</sup> <a name="capacityCommitmentId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.capacityCommitmentId"></a>

- *Type:* java.lang.String

The optional capacity commitment ID.

Capacity commitment name will be generated automatically if this field is
empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character
cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split
or merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#capacity_commitment_id BigqueryCapacityCommitment#capacity_commitment_id}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.edition"></a>

- *Type:* java.lang.String

The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#edition BigqueryCapacityCommitment#edition}

---

##### `enforceSingleAdminProjectPerOrg`<sup>Optional</sup> <a name="enforceSingleAdminProjectPerOrg" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.enforceSingleAdminProjectPerOrg"></a>

- *Type:* java.lang.String

If true, fail the request if another project in the organization has a capacity commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#enforce_single_admin_project_per_org BigqueryCapacityCommitment#enforce_single_admin_project_per_org}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#id BigqueryCapacityCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#location BigqueryCapacityCommitment#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#project BigqueryCapacityCommitment#project}.

---

##### `renewalPlan`<sup>Optional</sup> <a name="renewalPlan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.renewalPlan"></a>

- *Type:* java.lang.String

The plan this capacity commitment is converted to after commitmentEndTime passes.

Once the plan is changed, committed period is extended according to commitment plan. Only applicable for some commitment plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#renewal_plan BigqueryCapacityCommitment#renewal_plan}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#timeouts BigqueryCapacityCommitment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetCapacityCommitmentId">resetCapacityCommitmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetEnforceSingleAdminProjectPerOrg">resetEnforceSingleAdminProjectPerOrg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetRenewalPlan">resetRenewalPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.putTimeouts"></a>

```java
public void putTimeouts(BigqueryCapacityCommitmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>

---

##### `resetCapacityCommitmentId` <a name="resetCapacityCommitmentId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetCapacityCommitmentId"></a>

```java
public void resetCapacityCommitmentId()
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetEdition"></a>

```java
public void resetEdition()
```

##### `resetEnforceSingleAdminProjectPerOrg` <a name="resetEnforceSingleAdminProjectPerOrg" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetEnforceSingleAdminProjectPerOrg"></a>

```java
public void resetEnforceSingleAdminProjectPerOrg()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetProject"></a>

```java
public void resetProject()
```

##### `resetRenewalPlan` <a name="resetRenewalPlan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetRenewalPlan"></a>

```java
public void resetRenewalPlan()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryCapacityCommitment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_capacity_commitment.BigqueryCapacityCommitment;

BigqueryCapacityCommitment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_capacity_commitment.BigqueryCapacityCommitment;

BigqueryCapacityCommitment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_capacity_commitment.BigqueryCapacityCommitment;

BigqueryCapacityCommitment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_capacity_commitment.BigqueryCapacityCommitment;

BigqueryCapacityCommitment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BigqueryCapacityCommitment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BigqueryCapacityCommitment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BigqueryCapacityCommitment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BigqueryCapacityCommitment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryCapacityCommitment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.commitmentEndTime">commitmentEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.commitmentStartTime">commitmentStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference">BigqueryCapacityCommitmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.capacityCommitmentIdInput">capacityCommitmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.editionInput">editionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrgInput">enforceSingleAdminProjectPerOrgInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.planInput">planInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.renewalPlanInput">renewalPlanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.slotCountInput">slotCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.capacityCommitmentId">capacityCommitmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrg">enforceSingleAdminProjectPerOrg</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.plan">plan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.renewalPlan">renewalPlan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.slotCount">slotCount</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `commitmentEndTime`<sup>Required</sup> <a name="commitmentEndTime" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.commitmentEndTime"></a>

```java
public java.lang.String getCommitmentEndTime();
```

- *Type:* java.lang.String

---

##### `commitmentStartTime`<sup>Required</sup> <a name="commitmentStartTime" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.commitmentStartTime"></a>

```java
public java.lang.String getCommitmentStartTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.timeouts"></a>

```java
public BigqueryCapacityCommitmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference">BigqueryCapacityCommitmentTimeoutsOutputReference</a>

---

##### `capacityCommitmentIdInput`<sup>Optional</sup> <a name="capacityCommitmentIdInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.capacityCommitmentIdInput"></a>

```java
public java.lang.String getCapacityCommitmentIdInput();
```

- *Type:* java.lang.String

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.editionInput"></a>

```java
public java.lang.String getEditionInput();
```

- *Type:* java.lang.String

---

##### `enforceSingleAdminProjectPerOrgInput`<sup>Optional</sup> <a name="enforceSingleAdminProjectPerOrgInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrgInput"></a>

```java
public java.lang.String getEnforceSingleAdminProjectPerOrgInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `planInput`<sup>Optional</sup> <a name="planInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.planInput"></a>

```java
public java.lang.String getPlanInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `renewalPlanInput`<sup>Optional</sup> <a name="renewalPlanInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.renewalPlanInput"></a>

```java
public java.lang.String getRenewalPlanInput();
```

- *Type:* java.lang.String

---

##### `slotCountInput`<sup>Optional</sup> <a name="slotCountInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.slotCountInput"></a>

```java
public java.lang.Number getSlotCountInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>

---

##### `capacityCommitmentId`<sup>Required</sup> <a name="capacityCommitmentId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.capacityCommitmentId"></a>

```java
public java.lang.String getCapacityCommitmentId();
```

- *Type:* java.lang.String

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `enforceSingleAdminProjectPerOrg`<sup>Required</sup> <a name="enforceSingleAdminProjectPerOrg" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.enforceSingleAdminProjectPerOrg"></a>

```java
public java.lang.String getEnforceSingleAdminProjectPerOrg();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `renewalPlan`<sup>Required</sup> <a name="renewalPlan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.renewalPlan"></a>

```java
public java.lang.String getRenewalPlan();
```

- *Type:* java.lang.String

---

##### `slotCount`<sup>Required</sup> <a name="slotCount" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.slotCount"></a>

```java
public java.lang.Number getSlotCount();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryCapacityCommitmentConfig <a name="BigqueryCapacityCommitmentConfig" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_capacity_commitment.BigqueryCapacityCommitmentConfig;

BigqueryCapacityCommitmentConfig.builder()
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
    .plan(java.lang.String)
    .slotCount(java.lang.Number)
//  .capacityCommitmentId(java.lang.String)
//  .edition(java.lang.String)
//  .enforceSingleAdminProjectPerOrg(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .renewalPlan(java.lang.String)
//  .timeouts(BigqueryCapacityCommitmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.plan">plan</a></code> | <code>java.lang.String</code> | Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.slotCount">slotCount</a></code> | <code>java.lang.Number</code> | Number of slots in this commitment. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.capacityCommitmentId">capacityCommitmentId</a></code> | <code>java.lang.String</code> | The optional capacity commitment ID. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.edition">edition</a></code> | <code>java.lang.String</code> | The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.enforceSingleAdminProjectPerOrg">enforceSingleAdminProjectPerOrg</a></code> | <code>java.lang.String</code> | If true, fail the request if another project in the organization has a capacity commitment. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#id BigqueryCapacityCommitment#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#project BigqueryCapacityCommitment#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.renewalPlan">renewalPlan</a></code> | <code>java.lang.String</code> | The plan this capacity commitment is converted to after commitmentEndTime passes. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `plan`<sup>Required</sup> <a name="plan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.plan"></a>

```java
public java.lang.String getPlan();
```

- *Type:* java.lang.String

Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#plan BigqueryCapacityCommitment#plan}

---

##### `slotCount`<sup>Required</sup> <a name="slotCount" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.slotCount"></a>

```java
public java.lang.Number getSlotCount();
```

- *Type:* java.lang.Number

Number of slots in this commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#slot_count BigqueryCapacityCommitment#slot_count}

---

##### `capacityCommitmentId`<sup>Optional</sup> <a name="capacityCommitmentId" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.capacityCommitmentId"></a>

```java
public java.lang.String getCapacityCommitmentId();
```

- *Type:* java.lang.String

The optional capacity commitment ID.

Capacity commitment name will be generated automatically if this field is
empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character
cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split
or merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#capacity_commitment_id BigqueryCapacityCommitment#capacity_commitment_id}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#edition BigqueryCapacityCommitment#edition}

---

##### `enforceSingleAdminProjectPerOrg`<sup>Optional</sup> <a name="enforceSingleAdminProjectPerOrg" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.enforceSingleAdminProjectPerOrg"></a>

```java
public java.lang.String getEnforceSingleAdminProjectPerOrg();
```

- *Type:* java.lang.String

If true, fail the request if another project in the organization has a capacity commitment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#enforce_single_admin_project_per_org BigqueryCapacityCommitment#enforce_single_admin_project_per_org}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#id BigqueryCapacityCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#location BigqueryCapacityCommitment#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#project BigqueryCapacityCommitment#project}.

---

##### `renewalPlan`<sup>Optional</sup> <a name="renewalPlan" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.renewalPlan"></a>

```java
public java.lang.String getRenewalPlan();
```

- *Type:* java.lang.String

The plan this capacity commitment is converted to after commitmentEndTime passes.

Once the plan is changed, committed period is extended according to commitment plan. Only applicable for some commitment plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#renewal_plan BigqueryCapacityCommitment#renewal_plan}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentConfig.property.timeouts"></a>

```java
public BigqueryCapacityCommitmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#timeouts BigqueryCapacityCommitment#timeouts}

---

### BigqueryCapacityCommitmentTimeouts <a name="BigqueryCapacityCommitmentTimeouts" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_capacity_commitment.BigqueryCapacityCommitmentTimeouts;

BigqueryCapacityCommitmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#create BigqueryCapacityCommitment#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#delete BigqueryCapacityCommitment#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#update BigqueryCapacityCommitment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#create BigqueryCapacityCommitment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#delete BigqueryCapacityCommitment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/resources/bigquery_capacity_commitment#update BigqueryCapacityCommitment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryCapacityCommitmentTimeoutsOutputReference <a name="BigqueryCapacityCommitmentTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_capacity_commitment.BigqueryCapacityCommitmentTimeoutsOutputReference;

new BigqueryCapacityCommitmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryCapacityCommitment.BigqueryCapacityCommitmentTimeouts">BigqueryCapacityCommitmentTimeouts</a>

---



