# `dataplexEntryTypeIamBinding` Submodule <a name="`dataplexEntryTypeIamBinding` Submodule" id="@cdktf/provider-google.dataplexEntryTypeIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexEntryTypeIamBinding <a name="DataplexEntryTypeIamBinding" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding google_dataplex_entry_type_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataplex_entry_type_iam_binding.DataplexEntryTypeIamBinding;

DataplexEntryTypeIamBinding.Builder.create(Construct scope, java.lang.String id)
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
    .entryTypeId(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
//  .condition(DataplexEntryTypeIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.entryTypeId">entryTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#entry_type_id DataplexEntryTypeIamBinding#entry_type_id}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#members DataplexEntryTypeIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#role DataplexEntryTypeIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition">DataplexEntryTypeIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#id DataplexEntryTypeIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#location DataplexEntryTypeIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#project DataplexEntryTypeIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entryTypeId`<sup>Required</sup> <a name="entryTypeId" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.entryTypeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#entry_type_id DataplexEntryTypeIamBinding#entry_type_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#members DataplexEntryTypeIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#role DataplexEntryTypeIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition">DataplexEntryTypeIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#condition DataplexEntryTypeIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#id DataplexEntryTypeIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#location DataplexEntryTypeIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#project DataplexEntryTypeIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.putCondition"></a>

```java
public void putCondition(DataplexEntryTypeIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition">DataplexEntryTypeIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataplexEntryTypeIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.dataplex_entry_type_iam_binding.DataplexEntryTypeIamBinding;

DataplexEntryTypeIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.dataplex_entry_type_iam_binding.DataplexEntryTypeIamBinding;

DataplexEntryTypeIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.dataplex_entry_type_iam_binding.DataplexEntryTypeIamBinding;

DataplexEntryTypeIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.dataplex_entry_type_iam_binding.DataplexEntryTypeIamBinding;

DataplexEntryTypeIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataplexEntryTypeIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataplexEntryTypeIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataplexEntryTypeIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataplexEntryTypeIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataplexEntryTypeIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference">DataplexEntryTypeIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition">DataplexEntryTypeIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.entryTypeIdInput">entryTypeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.entryTypeId">entryTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.condition"></a>

```java
public DataplexEntryTypeIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference">DataplexEntryTypeIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.conditionInput"></a>

```java
public DataplexEntryTypeIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition">DataplexEntryTypeIamBindingCondition</a>

---

##### `entryTypeIdInput`<sup>Optional</sup> <a name="entryTypeIdInput" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.entryTypeIdInput"></a>

```java
public java.lang.String getEntryTypeIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `entryTypeId`<sup>Required</sup> <a name="entryTypeId" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.entryTypeId"></a>

```java
public java.lang.String getEntryTypeId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexEntryTypeIamBindingCondition <a name="DataplexEntryTypeIamBindingCondition" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataplex_entry_type_iam_binding.DataplexEntryTypeIamBindingCondition;

DataplexEntryTypeIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#expression DataplexEntryTypeIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#title DataplexEntryTypeIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#description DataplexEntryTypeIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#expression DataplexEntryTypeIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#title DataplexEntryTypeIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#description DataplexEntryTypeIamBinding#description}.

---

### DataplexEntryTypeIamBindingConfig <a name="DataplexEntryTypeIamBindingConfig" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataplex_entry_type_iam_binding.DataplexEntryTypeIamBindingConfig;

DataplexEntryTypeIamBindingConfig.builder()
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
    .entryTypeId(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
//  .condition(DataplexEntryTypeIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.entryTypeId">entryTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#entry_type_id DataplexEntryTypeIamBinding#entry_type_id}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#members DataplexEntryTypeIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#role DataplexEntryTypeIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition">DataplexEntryTypeIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#id DataplexEntryTypeIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#location DataplexEntryTypeIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#project DataplexEntryTypeIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entryTypeId`<sup>Required</sup> <a name="entryTypeId" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.entryTypeId"></a>

```java
public java.lang.String getEntryTypeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#entry_type_id DataplexEntryTypeIamBinding#entry_type_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#members DataplexEntryTypeIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#role DataplexEntryTypeIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.condition"></a>

```java
public DataplexEntryTypeIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition">DataplexEntryTypeIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#condition DataplexEntryTypeIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#id DataplexEntryTypeIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#location DataplexEntryTypeIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/dataplex_entry_type_iam_binding#project DataplexEntryTypeIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexEntryTypeIamBindingConditionOutputReference <a name="DataplexEntryTypeIamBindingConditionOutputReference" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.dataplex_entry_type_iam_binding.DataplexEntryTypeIamBindingConditionOutputReference;

new DataplexEntryTypeIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition">DataplexEntryTypeIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingConditionOutputReference.property.internalValue"></a>

```java
public DataplexEntryTypeIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntryTypeIamBinding.DataplexEntryTypeIamBindingCondition">DataplexEntryTypeIamBindingCondition</a>

---



