# `sccProjectCustomModule` Submodule <a name="`sccProjectCustomModule` Submodule" id="@cdktf/provider-google.sccProjectCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccProjectCustomModule <a name="SccProjectCustomModule" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module google_scc_project_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModule;

SccProjectCustomModule.Builder.create(Construct scope, java.lang.String id)
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
    .customConfig(SccProjectCustomModuleCustomConfig)
    .displayName(java.lang.String)
    .enablementState(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(SccProjectCustomModuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig">SccProjectCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.enablementState">enablementState</a></code> | <code>java.lang.String</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#id SccProjectCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#project SccProjectCustomModule#project}. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts">SccProjectCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customConfig`<sup>Required</sup> <a name="customConfig" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.customConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig">SccProjectCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#custom_config SccProjectCustomModule#custom_config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#display_name SccProjectCustomModule#display_name}

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* java.lang.String

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#enablement_state SccProjectCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#id SccProjectCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#project SccProjectCustomModule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts">SccProjectCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#timeouts SccProjectCustomModule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.putCustomConfig">putCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomConfig` <a name="putCustomConfig" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.putCustomConfig"></a>

```java
public void putCustomConfig(SccProjectCustomModuleCustomConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.putCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig">SccProjectCustomModuleCustomConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.putTimeouts"></a>

```java
public void putTimeouts(SccProjectCustomModuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts">SccProjectCustomModuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SccProjectCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModule;

SccProjectCustomModule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModule;

SccProjectCustomModule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModule;

SccProjectCustomModule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModule;

SccProjectCustomModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SccProjectCustomModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SccProjectCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SccProjectCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SccProjectCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SccProjectCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.ancestorModule">ancestorModule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference">SccProjectCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.lastEditor">lastEditor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference">SccProjectCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.customConfigInput">customConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig">SccProjectCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.enablementStateInput">enablementStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts">SccProjectCustomModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ancestorModule`<sup>Required</sup> <a name="ancestorModule" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.ancestorModule"></a>

```java
public java.lang.String getAncestorModule();
```

- *Type:* java.lang.String

---

##### `customConfig`<sup>Required</sup> <a name="customConfig" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.customConfig"></a>

```java
public SccProjectCustomModuleCustomConfigOutputReference getCustomConfig();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference">SccProjectCustomModuleCustomConfigOutputReference</a>

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.lastEditor"></a>

```java
public java.lang.String getLastEditor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.timeouts"></a>

```java
public SccProjectCustomModuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference">SccProjectCustomModuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `customConfigInput`<sup>Optional</sup> <a name="customConfigInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.customConfigInput"></a>

```java
public SccProjectCustomModuleCustomConfig getCustomConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig">SccProjectCustomModuleCustomConfig</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enablementStateInput`<sup>Optional</sup> <a name="enablementStateInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.enablementStateInput"></a>

```java
public java.lang.String getEnablementStateInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts">SccProjectCustomModuleTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SccProjectCustomModuleConfig <a name="SccProjectCustomModuleConfig" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModuleConfig;

SccProjectCustomModuleConfig.builder()
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
    .customConfig(SccProjectCustomModuleCustomConfig)
    .displayName(java.lang.String)
    .enablementState(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(SccProjectCustomModuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig">SccProjectCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#id SccProjectCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#project SccProjectCustomModule#project}. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts">SccProjectCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customConfig`<sup>Required</sup> <a name="customConfig" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.customConfig"></a>

```java
public SccProjectCustomModuleCustomConfig getCustomConfig();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig">SccProjectCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#custom_config SccProjectCustomModule#custom_config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#display_name SccProjectCustomModule#display_name}

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#enablement_state SccProjectCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#id SccProjectCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#project SccProjectCustomModule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleConfig.property.timeouts"></a>

```java
public SccProjectCustomModuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts">SccProjectCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#timeouts SccProjectCustomModule#timeouts}

---

### SccProjectCustomModuleCustomConfig <a name="SccProjectCustomModuleCustomConfig" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModuleCustomConfig;

SccProjectCustomModuleCustomConfig.builder()
    .predicate(SccProjectCustomModuleCustomConfigPredicate)
    .recommendation(java.lang.String)
    .resourceSelector(SccProjectCustomModuleCustomConfigResourceSelector)
    .severity(java.lang.String)
//  .customOutput(SccProjectCustomModuleCustomConfigCustomOutput)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate">SccProjectCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig.property.resourceSelector">resourceSelector</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelector">SccProjectCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig.property.severity">severity</a></code> | <code>java.lang.String</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig.property.customOutput">customOutput</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutput">SccProjectCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig.property.description">description</a></code> | <code>java.lang.String</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig.property.predicate"></a>

```java
public SccProjectCustomModuleCustomConfigPredicate getPredicate();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate">SccProjectCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#predicate SccProjectCustomModule#predicate}

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#recommendation SccProjectCustomModule#recommendation}

---

##### `resourceSelector`<sup>Required</sup> <a name="resourceSelector" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig.property.resourceSelector"></a>

```java
public SccProjectCustomModuleCustomConfigResourceSelector getResourceSelector();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelector">SccProjectCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#resource_selector SccProjectCustomModule#resource_selector}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#severity SccProjectCustomModule#severity}

---

##### `customOutput`<sup>Optional</sup> <a name="customOutput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig.property.customOutput"></a>

```java
public SccProjectCustomModuleCustomConfigCustomOutput getCustomOutput();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutput">SccProjectCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#custom_output SccProjectCustomModule#custom_output}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#description SccProjectCustomModule#description}

---

### SccProjectCustomModuleCustomConfigCustomOutput <a name="SccProjectCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModuleCustomConfigCustomOutput;

SccProjectCustomModuleCustomConfigCustomOutput.builder()
//  .properties(IResolvable)
//  .properties(java.util.List<SccProjectCustomModuleCustomConfigCustomOutputProperties>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutput.property.properties">properties</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputProperties">SccProjectCustomModuleCustomConfigCustomOutputProperties</a>></code> | properties block. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutput.property.properties"></a>

```java
public java.lang.Object getProperties();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputProperties">SccProjectCustomModuleCustomConfigCustomOutputProperties</a>>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#properties SccProjectCustomModule#properties}

---

### SccProjectCustomModuleCustomConfigCustomOutputProperties <a name="SccProjectCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModuleCustomConfigCustomOutputProperties;

SccProjectCustomModuleCustomConfigCustomOutputProperties.builder()
//  .name(java.lang.String)
//  .valueExpression(SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputProperties.property.name">name</a></code> | <code>java.lang.String</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">valueExpression</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#name SccProjectCustomModule#name}

---

##### `valueExpression`<sup>Optional</sup> <a name="valueExpression" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```java
public SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression getValueExpression();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#value_expression SccProjectCustomModule#value_expression}

---

### SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression;

SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#expression SccProjectCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#description SccProjectCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#location SccProjectCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#title SccProjectCustomModule#title}

---

### SccProjectCustomModuleCustomConfigPredicate <a name="SccProjectCustomModuleCustomConfigPredicate" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModuleCustomConfigPredicate;

SccProjectCustomModuleCustomConfigPredicate.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#expression SccProjectCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#description SccProjectCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#location SccProjectCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#title SccProjectCustomModule#title}

---

### SccProjectCustomModuleCustomConfigResourceSelector <a name="SccProjectCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModuleCustomConfigResourceSelector;

SccProjectCustomModuleCustomConfigResourceSelector.builder()
    .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelector.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | The resource types to run the detector on. |

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#resource_types SccProjectCustomModule#resource_types}

---

### SccProjectCustomModuleTimeouts <a name="SccProjectCustomModuleTimeouts" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModuleTimeouts;

SccProjectCustomModuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#create SccProjectCustomModule#create}. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#delete SccProjectCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#update SccProjectCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#create SccProjectCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#delete SccProjectCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/scc_project_custom_module#update SccProjectCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccProjectCustomModuleCustomConfigCustomOutputOutputReference <a name="SccProjectCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModuleCustomConfigCustomOutputOutputReference;

new SccProjectCustomModuleCustomConfigCustomOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperties` <a name="putProperties" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```java
public void putProperties(IResolvable OR java.util.List<SccProjectCustomModuleCustomConfigCustomOutputProperties> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputProperties">SccProjectCustomModuleCustomConfigCustomOutputProperties</a>>

---

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList">SccProjectCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputProperties">SccProjectCustomModuleCustomConfigCustomOutputProperties</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutput">SccProjectCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```java
public SccProjectCustomModuleCustomConfigCustomOutputPropertiesList getProperties();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList">SccProjectCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```java
public java.lang.Object getPropertiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputProperties">SccProjectCustomModuleCustomConfigCustomOutputProperties</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```java
public SccProjectCustomModuleCustomConfigCustomOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutput">SccProjectCustomModuleCustomConfigCustomOutput</a>

---


### SccProjectCustomModuleCustomConfigCustomOutputPropertiesList <a name="SccProjectCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList;

new SccProjectCustomModuleCustomConfigCustomOutputPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```java
public SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputProperties">SccProjectCustomModuleCustomConfigCustomOutputProperties</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputProperties">SccProjectCustomModuleCustomConfigCustomOutputProperties</a>>

---


### SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference;

new SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">putValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">resetValueExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueExpression` <a name="putValueExpression" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```java
public void putValueExpression(SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValueExpression` <a name="resetValueExpression" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```java
public void resetValueExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">valueExpression</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">valueExpressionInput</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputProperties">SccProjectCustomModuleCustomConfigCustomOutputProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueExpression`<sup>Required</sup> <a name="valueExpression" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```java
public SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference getValueExpression();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueExpressionInput`<sup>Optional</sup> <a name="valueExpressionInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```java
public SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression getValueExpressionInput();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputProperties">SccProjectCustomModuleCustomConfigCustomOutputProperties</a>

---


### SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference;

new SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```java
public SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccProjectCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### SccProjectCustomModuleCustomConfigOutputReference <a name="SccProjectCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModuleCustomConfigOutputReference;

new SccProjectCustomModuleCustomConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.putCustomOutput">putCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.putPredicate">putPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.putResourceSelector">putResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.resetCustomOutput">resetCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomOutput` <a name="putCustomOutput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```java
public void putCustomOutput(SccProjectCustomModuleCustomConfigCustomOutput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutput">SccProjectCustomModuleCustomConfigCustomOutput</a>

---

##### `putPredicate` <a name="putPredicate" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.putPredicate"></a>

```java
public void putPredicate(SccProjectCustomModuleCustomConfigPredicate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate">SccProjectCustomModuleCustomConfigPredicate</a>

---

##### `putResourceSelector` <a name="putResourceSelector" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```java
public void putResourceSelector(SccProjectCustomModuleCustomConfigResourceSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelector">SccProjectCustomModuleCustomConfigResourceSelector</a>

---

##### `resetCustomOutput` <a name="resetCustomOutput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```java
public void resetCustomOutput()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.customOutput">customOutput</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference">SccProjectCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference">SccProjectCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.resourceSelector">resourceSelector</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference">SccProjectCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.customOutputInput">customOutputInput</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutput">SccProjectCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.predicateInput">predicateInput</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate">SccProjectCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.recommendationInput">recommendationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">resourceSelectorInput</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelector">SccProjectCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig">SccProjectCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customOutput`<sup>Required</sup> <a name="customOutput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```java
public SccProjectCustomModuleCustomConfigCustomOutputOutputReference getCustomOutput();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutputOutputReference">SccProjectCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.predicate"></a>

```java
public SccProjectCustomModuleCustomConfigPredicateOutputReference getPredicate();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference">SccProjectCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `resourceSelector`<sup>Required</sup> <a name="resourceSelector" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```java
public SccProjectCustomModuleCustomConfigResourceSelectorOutputReference getResourceSelector();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference">SccProjectCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `customOutputInput`<sup>Optional</sup> <a name="customOutputInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```java
public SccProjectCustomModuleCustomConfigCustomOutput getCustomOutputInput();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigCustomOutput">SccProjectCustomModuleCustomConfigCustomOutput</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `predicateInput`<sup>Optional</sup> <a name="predicateInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```java
public SccProjectCustomModuleCustomConfigPredicate getPredicateInput();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate">SccProjectCustomModuleCustomConfigPredicate</a>

---

##### `recommendationInput`<sup>Optional</sup> <a name="recommendationInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```java
public java.lang.String getRecommendationInput();
```

- *Type:* java.lang.String

---

##### `resourceSelectorInput`<sup>Optional</sup> <a name="resourceSelectorInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```java
public SccProjectCustomModuleCustomConfigResourceSelector getResourceSelectorInput();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelector">SccProjectCustomModuleCustomConfigResourceSelector</a>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```java
public SccProjectCustomModuleCustomConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfig">SccProjectCustomModuleCustomConfig</a>

---


### SccProjectCustomModuleCustomConfigPredicateOutputReference <a name="SccProjectCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModuleCustomConfigPredicateOutputReference;

new SccProjectCustomModuleCustomConfigPredicateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate">SccProjectCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```java
public SccProjectCustomModuleCustomConfigPredicate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigPredicate">SccProjectCustomModuleCustomConfigPredicate</a>

---


### SccProjectCustomModuleCustomConfigResourceSelectorOutputReference <a name="SccProjectCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference;

new SccProjectCustomModuleCustomConfigResourceSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelector">SccProjectCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```java
public SccProjectCustomModuleCustomConfigResourceSelector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleCustomConfigResourceSelector">SccProjectCustomModuleCustomConfigResourceSelector</a>

---


### SccProjectCustomModuleTimeoutsOutputReference <a name="SccProjectCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_project_custom_module.SccProjectCustomModuleTimeoutsOutputReference;

new SccProjectCustomModuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts">SccProjectCustomModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccProjectCustomModule.SccProjectCustomModuleTimeouts">SccProjectCustomModuleTimeouts</a>

---



