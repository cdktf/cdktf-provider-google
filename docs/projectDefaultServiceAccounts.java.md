# `projectDefaultServiceAccounts` Submodule <a name="`projectDefaultServiceAccounts` Submodule" id="@cdktf/provider-google.projectDefaultServiceAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectDefaultServiceAccounts <a name="ProjectDefaultServiceAccounts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts google_project_default_service_accounts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.project_default_service_accounts.ProjectDefaultServiceAccounts;

ProjectDefaultServiceAccounts.Builder.create(Construct scope, java.lang.String id)
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
    .action(java.lang.String)
    .project(java.lang.String)
//  .id(java.lang.String)
//  .restorePolicy(java.lang.String)
//  .timeouts(ProjectDefaultServiceAccountsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | The action to be performed in the default service accounts. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project ID where service accounts are created. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#id ProjectDefaultServiceAccounts#id}. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.restorePolicy">restorePolicy</a></code> | <code>java.lang.String</code> | The action to be performed in the default service accounts on the resource destroy. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.action"></a>

- *Type:* java.lang.String

The action to be performed in the default service accounts.

Valid values are: DEPRIVILEGE, DELETE, DISABLE.
Note that DEPRIVILEGE action will ignore the REVERT configuration in the restore_policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#action ProjectDefaultServiceAccounts#action}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project ID where service accounts are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#project ProjectDefaultServiceAccounts#project}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#id ProjectDefaultServiceAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restorePolicy`<sup>Optional</sup> <a name="restorePolicy" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.restorePolicy"></a>

- *Type:* java.lang.String

The action to be performed in the default service accounts on the resource destroy.

Valid values are NONE, REVERT and REVERT_AND_IGNORE_FAILURE. It is applied for any action but in the DEPRIVILEGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#restore_policy ProjectDefaultServiceAccounts#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#timeouts ProjectDefaultServiceAccounts#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetRestorePolicy">resetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.putTimeouts"></a>

```java
public void putTimeouts(ProjectDefaultServiceAccountsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetId"></a>

```java
public void resetId()
```

##### `resetRestorePolicy` <a name="resetRestorePolicy" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetRestorePolicy"></a>

```java
public void resetRestorePolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectDefaultServiceAccounts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.project_default_service_accounts.ProjectDefaultServiceAccounts;

ProjectDefaultServiceAccounts.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.project_default_service_accounts.ProjectDefaultServiceAccounts;

ProjectDefaultServiceAccounts.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.project_default_service_accounts.ProjectDefaultServiceAccounts;

ProjectDefaultServiceAccounts.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.project_default_service_accounts.ProjectDefaultServiceAccounts;

ProjectDefaultServiceAccounts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProjectDefaultServiceAccounts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ProjectDefaultServiceAccounts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProjectDefaultServiceAccounts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProjectDefaultServiceAccounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ProjectDefaultServiceAccounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.serviceAccounts">serviceAccounts</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference">ProjectDefaultServiceAccountsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.restorePolicyInput">restorePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.restorePolicy">restorePolicy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serviceAccounts`<sup>Required</sup> <a name="serviceAccounts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.serviceAccounts"></a>

```java
public StringMap getServiceAccounts();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.timeouts"></a>

```java
public ProjectDefaultServiceAccountsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference">ProjectDefaultServiceAccountsTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `restorePolicyInput`<sup>Optional</sup> <a name="restorePolicyInput" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.restorePolicyInput"></a>

```java
public java.lang.String getRestorePolicyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `restorePolicy`<sup>Required</sup> <a name="restorePolicy" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.restorePolicy"></a>

```java
public java.lang.String getRestorePolicy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccounts.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectDefaultServiceAccountsConfig <a name="ProjectDefaultServiceAccountsConfig" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.project_default_service_accounts.ProjectDefaultServiceAccountsConfig;

ProjectDefaultServiceAccountsConfig.builder()
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
    .action(java.lang.String)
    .project(java.lang.String)
//  .id(java.lang.String)
//  .restorePolicy(java.lang.String)
//  .timeouts(ProjectDefaultServiceAccountsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.action">action</a></code> | <code>java.lang.String</code> | The action to be performed in the default service accounts. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project ID where service accounts are created. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#id ProjectDefaultServiceAccounts#id}. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.restorePolicy">restorePolicy</a></code> | <code>java.lang.String</code> | The action to be performed in the default service accounts on the resource destroy. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The action to be performed in the default service accounts.

Valid values are: DEPRIVILEGE, DELETE, DISABLE.
Note that DEPRIVILEGE action will ignore the REVERT configuration in the restore_policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#action ProjectDefaultServiceAccounts#action}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project ID where service accounts are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#project ProjectDefaultServiceAccounts#project}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#id ProjectDefaultServiceAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restorePolicy`<sup>Optional</sup> <a name="restorePolicy" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.restorePolicy"></a>

```java
public java.lang.String getRestorePolicy();
```

- *Type:* java.lang.String

The action to be performed in the default service accounts on the resource destroy.

Valid values are NONE, REVERT and REVERT_AND_IGNORE_FAILURE. It is applied for any action but in the DEPRIVILEGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#restore_policy ProjectDefaultServiceAccounts#restore_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsConfig.property.timeouts"></a>

```java
public ProjectDefaultServiceAccountsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#timeouts ProjectDefaultServiceAccounts#timeouts}

---

### ProjectDefaultServiceAccountsTimeouts <a name="ProjectDefaultServiceAccountsTimeouts" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.project_default_service_accounts.ProjectDefaultServiceAccountsTimeouts;

ProjectDefaultServiceAccountsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#create ProjectDefaultServiceAccounts#create}. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#delete ProjectDefaultServiceAccounts#delete}. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#read ProjectDefaultServiceAccounts#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#create ProjectDefaultServiceAccounts#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#delete ProjectDefaultServiceAccounts#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.1/docs/resources/project_default_service_accounts#read ProjectDefaultServiceAccounts#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectDefaultServiceAccountsTimeoutsOutputReference <a name="ProjectDefaultServiceAccountsTimeoutsOutputReference" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.project_default_service_accounts.ProjectDefaultServiceAccountsTimeoutsOutputReference;

new ProjectDefaultServiceAccountsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.projectDefaultServiceAccounts.ProjectDefaultServiceAccountsTimeouts">ProjectDefaultServiceAccountsTimeouts</a>

---



