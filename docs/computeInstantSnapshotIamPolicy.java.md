# `computeInstantSnapshotIamPolicy` Submodule <a name="`computeInstantSnapshotIamPolicy` Submodule" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstantSnapshotIamPolicy <a name="ComputeInstantSnapshotIamPolicy" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy google_compute_instant_snapshot_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instant_snapshot_iam_policy.ComputeInstantSnapshotIamPolicy;

ComputeInstantSnapshotIamPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .policyData(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#name ComputeInstantSnapshotIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.policyData">policyData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#policy_data ComputeInstantSnapshotIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#id ComputeInstantSnapshotIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#project ComputeInstantSnapshotIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#zone ComputeInstantSnapshotIamPolicy#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#name ComputeInstantSnapshotIamPolicy#name}.

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#policy_data ComputeInstantSnapshotIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#id ComputeInstantSnapshotIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#project ComputeInstantSnapshotIamPolicy#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#zone ComputeInstantSnapshotIamPolicy#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeInstantSnapshotIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instant_snapshot_iam_policy.ComputeInstantSnapshotIamPolicy;

ComputeInstantSnapshotIamPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instant_snapshot_iam_policy.ComputeInstantSnapshotIamPolicy;

ComputeInstantSnapshotIamPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instant_snapshot_iam_policy.ComputeInstantSnapshotIamPolicy;

ComputeInstantSnapshotIamPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instant_snapshot_iam_policy.ComputeInstantSnapshotIamPolicy;

ComputeInstantSnapshotIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeInstantSnapshotIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeInstantSnapshotIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeInstantSnapshotIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeInstantSnapshotIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInstantSnapshotIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.policyDataInput">policyDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.policyData">policyData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyDataInput`<sup>Optional</sup> <a name="policyDataInput" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.policyDataInput"></a>

```java
public java.lang.String getPolicyDataInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.policyData"></a>

```java
public java.lang.String getPolicyData();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstantSnapshotIamPolicyConfig <a name="ComputeInstantSnapshotIamPolicyConfig" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instant_snapshot_iam_policy.ComputeInstantSnapshotIamPolicyConfig;

ComputeInstantSnapshotIamPolicyConfig.builder()
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
    .policyData(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#name ComputeInstantSnapshotIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.policyData">policyData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#policy_data ComputeInstantSnapshotIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#id ComputeInstantSnapshotIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#project ComputeInstantSnapshotIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#zone ComputeInstantSnapshotIamPolicy#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#name ComputeInstantSnapshotIamPolicy#name}.

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.policyData"></a>

```java
public java.lang.String getPolicyData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#policy_data ComputeInstantSnapshotIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#id ComputeInstantSnapshotIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#project ComputeInstantSnapshotIamPolicy#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeInstantSnapshotIamPolicy.ComputeInstantSnapshotIamPolicyConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/compute_instant_snapshot_iam_policy#zone ComputeInstantSnapshotIamPolicy#zone}.

---



