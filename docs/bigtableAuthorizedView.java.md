# `bigtableAuthorizedView` Submodule <a name="`bigtableAuthorizedView` Submodule" id="@cdktf/provider-google.bigtableAuthorizedView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableAuthorizedView <a name="BigtableAuthorizedView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view google_bigtable_authorized_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_authorized_view.BigtableAuthorizedView;

BigtableAuthorizedView.Builder.create(Construct scope, java.lang.String id)
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
    .instanceName(java.lang.String)
    .name(java.lang.String)
    .tableName(java.lang.String)
//  .deletionProtection(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .subsetView(BigtableAuthorizedViewSubsetView)
//  .timeouts(BigtableAuthorizedViewTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.instanceName">instanceName</a></code> | <code>java.lang.String</code> | The name of the Bigtable instance in which the authorized view belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the authorized view. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.tableName">tableName</a></code> | <code>java.lang.String</code> | The name of the Bigtable table in which the authorized view belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.String</code> | A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#id BigtableAuthorizedView#id}. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.subsetView">subsetView</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a></code> | subset_view block. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.instanceName"></a>

- *Type:* java.lang.String

The name of the Bigtable instance in which the authorized view belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#instance_name BigtableAuthorizedView#instance_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the authorized view.

Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#name BigtableAuthorizedView#name}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.tableName"></a>

- *Type:* java.lang.String

The name of the Bigtable table in which the authorized view belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#table_name BigtableAuthorizedView#table_name}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.String

A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#deletion_protection BigtableAuthorizedView#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#id BigtableAuthorizedView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#project BigtableAuthorizedView#project}

---

##### `subsetView`<sup>Optional</sup> <a name="subsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.subsetView"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

subset_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#subset_view BigtableAuthorizedView#subset_view}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#timeouts BigtableAuthorizedView#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putSubsetView">putSubsetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetSubsetView">resetSubsetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSubsetView` <a name="putSubsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putSubsetView"></a>

```java
public void putSubsetView(BigtableAuthorizedViewSubsetView value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putSubsetView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putTimeouts"></a>

```java
public void putTimeouts(BigtableAuthorizedViewTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetProject"></a>

```java
public void resetProject()
```

##### `resetSubsetView` <a name="resetSubsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetSubsetView"></a>

```java
public void resetSubsetView()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigtableAuthorizedView resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_authorized_view.BigtableAuthorizedView;

BigtableAuthorizedView.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_authorized_view.BigtableAuthorizedView;

BigtableAuthorizedView.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_authorized_view.BigtableAuthorizedView;

BigtableAuthorizedView.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_authorized_view.BigtableAuthorizedView;

BigtableAuthorizedView.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BigtableAuthorizedView.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BigtableAuthorizedView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BigtableAuthorizedView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BigtableAuthorizedView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BigtableAuthorizedView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.subsetView">subsetView</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference">BigtableAuthorizedViewSubsetViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference">BigtableAuthorizedViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.instanceNameInput">instanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.subsetViewInput">subsetViewInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `subsetView`<sup>Required</sup> <a name="subsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.subsetView"></a>

```java
public BigtableAuthorizedViewSubsetViewOutputReference getSubsetView();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference">BigtableAuthorizedViewSubsetViewOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.timeouts"></a>

```java
public BigtableAuthorizedViewTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference">BigtableAuthorizedViewTimeoutsOutputReference</a>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.deletionProtectionInput"></a>

```java
public java.lang.String getDeletionProtectionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.instanceNameInput"></a>

```java
public java.lang.String getInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `subsetViewInput`<sup>Optional</sup> <a name="subsetViewInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.subsetViewInput"></a>

```java
public BigtableAuthorizedViewSubsetView getSubsetViewInput();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.deletionProtection"></a>

```java
public java.lang.String getDeletionProtection();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedView.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableAuthorizedViewConfig <a name="BigtableAuthorizedViewConfig" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_authorized_view.BigtableAuthorizedViewConfig;

BigtableAuthorizedViewConfig.builder()
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
    .instanceName(java.lang.String)
    .name(java.lang.String)
    .tableName(java.lang.String)
//  .deletionProtection(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .subsetView(BigtableAuthorizedViewSubsetView)
//  .timeouts(BigtableAuthorizedViewTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | The name of the Bigtable instance in which the authorized view belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the authorized view. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | The name of the Bigtable table in which the authorized view belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.String</code> | A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#id BigtableAuthorizedView#id}. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.subsetView">subsetView</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a></code> | subset_view block. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

The name of the Bigtable instance in which the authorized view belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#instance_name BigtableAuthorizedView#instance_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the authorized view.

Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#name BigtableAuthorizedView#name}

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

The name of the Bigtable table in which the authorized view belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#table_name BigtableAuthorizedView#table_name}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.deletionProtection"></a>

```java
public java.lang.String getDeletionProtection();
```

- *Type:* java.lang.String

A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#deletion_protection BigtableAuthorizedView#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#id BigtableAuthorizedView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#project BigtableAuthorizedView#project}

---

##### `subsetView`<sup>Optional</sup> <a name="subsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.subsetView"></a>

```java
public BigtableAuthorizedViewSubsetView getSubsetView();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

subset_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#subset_view BigtableAuthorizedView#subset_view}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewConfig.property.timeouts"></a>

```java
public BigtableAuthorizedViewTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#timeouts BigtableAuthorizedView#timeouts}

---

### BigtableAuthorizedViewSubsetView <a name="BigtableAuthorizedViewSubsetView" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_authorized_view.BigtableAuthorizedViewSubsetView;

BigtableAuthorizedViewSubsetView.builder()
//  .familySubsets(IResolvable)
//  .familySubsets(java.util.List<BigtableAuthorizedViewSubsetViewFamilySubsets>)
//  .rowPrefixes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.property.familySubsets">familySubsets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>></code> | family_subsets block. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.property.rowPrefixes">rowPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Base64-encoded row prefixes to be included in the authorized view. |

---

##### `familySubsets`<sup>Optional</sup> <a name="familySubsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.property.familySubsets"></a>

```java
public java.lang.Object getFamilySubsets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>>

family_subsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#family_subsets BigtableAuthorizedView#family_subsets}

---

##### `rowPrefixes`<sup>Optional</sup> <a name="rowPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView.property.rowPrefixes"></a>

```java
public java.util.List<java.lang.String> getRowPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Base64-encoded row prefixes to be included in the authorized view.

To provide access to all rows, include the empty string as a prefix ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#row_prefixes BigtableAuthorizedView#row_prefixes}

---

### BigtableAuthorizedViewSubsetViewFamilySubsets <a name="BigtableAuthorizedViewSubsetViewFamilySubsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_authorized_view.BigtableAuthorizedViewSubsetViewFamilySubsets;

BigtableAuthorizedViewSubsetViewFamilySubsets.builder()
    .familyName(java.lang.String)
//  .qualifierPrefixes(java.util.List<java.lang.String>)
//  .qualifiers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.familyName">familyName</a></code> | <code>java.lang.String</code> | Name of the column family to be included in the authorized view. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifierPrefixes">qualifierPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Base64-encoded prefixes for qualifiers of the column family to be included in the authorized view. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifiers">qualifiers</a></code> | <code>java.util.List<java.lang.String></code> | Base64-encoded individual exact column qualifiers of the column family to be included in the authorized view. |

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.familyName"></a>

```java
public java.lang.String getFamilyName();
```

- *Type:* java.lang.String

Name of the column family to be included in the authorized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#family_name BigtableAuthorizedView#family_name}

---

##### `qualifierPrefixes`<sup>Optional</sup> <a name="qualifierPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifierPrefixes"></a>

```java
public java.util.List<java.lang.String> getQualifierPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Base64-encoded prefixes for qualifiers of the column family to be included in the authorized view.

Every qualifier starting with one of these prefixes is included in the authorized view. To provide access to all qualifiers, include the empty string as a prefix ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#qualifier_prefixes BigtableAuthorizedView#qualifier_prefixes}

---

##### `qualifiers`<sup>Optional</sup> <a name="qualifiers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifiers"></a>

```java
public java.util.List<java.lang.String> getQualifiers();
```

- *Type:* java.util.List<java.lang.String>

Base64-encoded individual exact column qualifiers of the column family to be included in the authorized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#qualifiers BigtableAuthorizedView#qualifiers}

---

### BigtableAuthorizedViewTimeouts <a name="BigtableAuthorizedViewTimeouts" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_authorized_view.BigtableAuthorizedViewTimeouts;

BigtableAuthorizedViewTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#create BigtableAuthorizedView#create}. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#update BigtableAuthorizedView#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#create BigtableAuthorizedView#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/bigtable_authorized_view#update BigtableAuthorizedView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableAuthorizedViewSubsetViewFamilySubsetsList <a name="BigtableAuthorizedViewSubsetViewFamilySubsetsList" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_authorized_view.BigtableAuthorizedViewSubsetViewFamilySubsetsList;

new BigtableAuthorizedViewSubsetViewFamilySubsetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.get"></a>

```java
public BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>>

---


### BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference <a name="BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_authorized_view.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference;

new BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifierPrefixes">resetQualifierPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifiers">resetQualifiers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQualifierPrefixes` <a name="resetQualifierPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifierPrefixes"></a>

```java
public void resetQualifierPrefixes()
```

##### `resetQualifiers` <a name="resetQualifiers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifiers"></a>

```java
public void resetQualifiers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyNameInput">familyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixesInput">qualifierPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiersInput">qualifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyName">familyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixes">qualifierPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiers">qualifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `familyNameInput`<sup>Optional</sup> <a name="familyNameInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyNameInput"></a>

```java
public java.lang.String getFamilyNameInput();
```

- *Type:* java.lang.String

---

##### `qualifierPrefixesInput`<sup>Optional</sup> <a name="qualifierPrefixesInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getQualifierPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `qualifiersInput`<sup>Optional</sup> <a name="qualifiersInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiersInput"></a>

```java
public java.util.List<java.lang.String> getQualifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `familyName`<sup>Required</sup> <a name="familyName" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyName"></a>

```java
public java.lang.String getFamilyName();
```

- *Type:* java.lang.String

---

##### `qualifierPrefixes`<sup>Required</sup> <a name="qualifierPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixes"></a>

```java
public java.util.List<java.lang.String> getQualifierPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `qualifiers`<sup>Required</sup> <a name="qualifiers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiers"></a>

```java
public java.util.List<java.lang.String> getQualifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>

---


### BigtableAuthorizedViewSubsetViewOutputReference <a name="BigtableAuthorizedViewSubsetViewOutputReference" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_authorized_view.BigtableAuthorizedViewSubsetViewOutputReference;

new BigtableAuthorizedViewSubsetViewOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets">putFamilySubsets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resetFamilySubsets">resetFamilySubsets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resetRowPrefixes">resetRowPrefixes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFamilySubsets` <a name="putFamilySubsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets"></a>

```java
public void putFamilySubsets(IResolvable OR java.util.List<BigtableAuthorizedViewSubsetViewFamilySubsets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>>

---

##### `resetFamilySubsets` <a name="resetFamilySubsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resetFamilySubsets"></a>

```java
public void resetFamilySubsets()
```

##### `resetRowPrefixes` <a name="resetRowPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.resetRowPrefixes"></a>

```java
public void resetRowPrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.familySubsets">familySubsets</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList">BigtableAuthorizedViewSubsetViewFamilySubsetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.familySubsetsInput">familySubsetsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixesInput">rowPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixes">rowPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `familySubsets`<sup>Required</sup> <a name="familySubsets" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.familySubsets"></a>

```java
public BigtableAuthorizedViewSubsetViewFamilySubsetsList getFamilySubsets();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsetsList">BigtableAuthorizedViewSubsetViewFamilySubsetsList</a>

---

##### `familySubsetsInput`<sup>Optional</sup> <a name="familySubsetsInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.familySubsetsInput"></a>

```java
public java.lang.Object getFamilySubsetsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewFamilySubsets">BigtableAuthorizedViewSubsetViewFamilySubsets</a>>

---

##### `rowPrefixesInput`<sup>Optional</sup> <a name="rowPrefixesInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getRowPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rowPrefixes`<sup>Required</sup> <a name="rowPrefixes" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixes"></a>

```java
public java.util.List<java.lang.String> getRowPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetViewOutputReference.property.internalValue"></a>

```java
public BigtableAuthorizedViewSubsetView getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewSubsetView">BigtableAuthorizedViewSubsetView</a>

---


### BigtableAuthorizedViewTimeoutsOutputReference <a name="BigtableAuthorizedViewTimeoutsOutputReference" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigtable_authorized_view.BigtableAuthorizedViewTimeoutsOutputReference;

new BigtableAuthorizedViewTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigtableAuthorizedView.BigtableAuthorizedViewTimeouts">BigtableAuthorizedViewTimeouts</a>

---



