# `sccManagementFolderSecurityHealthAnalyticsCustomModule` Submodule <a name="`sccManagementFolderSecurityHealthAnalyticsCustomModule` Submodule" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccManagementFolderSecurityHealthAnalyticsCustomModule <a name="SccManagementFolderSecurityHealthAnalyticsCustomModule" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module google_scc_management_folder_security_health_analytics_custom_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModule;

SccManagementFolderSecurityHealthAnalyticsCustomModule.Builder.create(Construct scope, java.lang.String id)
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
    .folder(java.lang.String)
//  .customConfig(SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig)
//  .displayName(java.lang.String)
//  .enablementState(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .timeouts(SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.enablementState">enablementState</a></code> | <code>java.lang.String</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#id SccManagementFolderSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#folder SccManagementFolderSecurityHealthAnalyticsCustomModule#folder}

---

##### `customConfig`<sup>Optional</sup> <a name="customConfig" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.customConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#custom_config SccManagementFolderSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the Security Health Analytics custom module.

This
display name becomes the finding category for all findings that are
returned by this custom module. The display name must be between 1 and
128 characters, start with a lowercase letter, and contain alphanumeric
characters or underscores only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#display_name SccManagementFolderSecurityHealthAnalyticsCustomModule#display_name}

---

##### `enablementState`<sup>Optional</sup> <a name="enablementState" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.enablementState"></a>

- *Type:* java.lang.String

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#enablement_state SccManagementFolderSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#id SccManagementFolderSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#location SccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#timeouts SccManagementFolderSecurityHealthAnalyticsCustomModule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig">putCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetCustomConfig">resetCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetEnablementState">resetEnablementState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomConfig` <a name="putCustomConfig" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig"></a>

```java
public void putCustomConfig(SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts"></a>

```java
public void putTimeouts(SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

---

##### `resetCustomConfig` <a name="resetCustomConfig" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetCustomConfig"></a>

```java
public void resetCustomConfig()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnablementState` <a name="resetEnablementState" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetEnablementState"></a>

```java
public void resetEnablementState()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SccManagementFolderSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModule;

SccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModule;

SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModule;

SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModule;

SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SccManagementFolderSecurityHealthAnalyticsCustomModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SccManagementFolderSecurityHealthAnalyticsCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SccManagementFolderSecurityHealthAnalyticsCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SccManagementFolderSecurityHealthAnalyticsCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.ancestorModule">ancestorModule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.lastEditor">lastEditor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfigInput">customConfigInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementStateInput">enablementStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ancestorModule`<sup>Required</sup> <a name="ancestorModule" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.ancestorModule"></a>

```java
public java.lang.String getAncestorModule();
```

- *Type:* java.lang.String

---

##### `customConfig`<sup>Required</sup> <a name="customConfig" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfig"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference getCustomConfig();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference</a>

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.lastEditor"></a>

```java
public java.lang.String getLastEditor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeouts"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `customConfigInput`<sup>Optional</sup> <a name="customConfigInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.customConfigInput"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig getCustomConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enablementStateInput`<sup>Optional</sup> <a name="enablementStateInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementStateInput"></a>

```java
public java.lang.String getEnablementStateInput();
```

- *Type:* java.lang.String

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig;

SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.builder()
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
    .folder(java.lang.String)
//  .customConfig(SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig)
//  .displayName(java.lang.String)
//  .enablementState(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .timeouts(SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | Numerical ID of the parent folder. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.customConfig">customConfig</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | custom_config block. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the Security Health Analytics custom module. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.enablementState">enablementState</a></code> | <code>java.lang.String</code> | The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#id SccManagementFolderSecurityHealthAnalyticsCustomModule#id}. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location ID of the parent organization. If not provided, 'global' will be used as the default location. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

Numerical ID of the parent folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#folder SccManagementFolderSecurityHealthAnalyticsCustomModule#folder}

---

##### `customConfig`<sup>Optional</sup> <a name="customConfig" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.customConfig"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig getCustomConfig();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#custom_config SccManagementFolderSecurityHealthAnalyticsCustomModule#custom_config}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.displayName"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#display_name SccManagementFolderSecurityHealthAnalyticsCustomModule#display_name}

---

##### `enablementState`<sup>Optional</sup> <a name="enablementState" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.enablementState"></a>

```java
public java.lang.String getEnablementState();
```

- *Type:* java.lang.String

The enablement state of the custom module. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#enablement_state SccManagementFolderSecurityHealthAnalyticsCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#id SccManagementFolderSecurityHealthAnalyticsCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location ID of the parent organization. If not provided, 'global' will be used as the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#location SccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleConfig.property.timeouts"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#timeouts SccManagementFolderSecurityHealthAnalyticsCustomModule#timeouts}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig;

SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.builder()
//  .customOutput(SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput)
//  .description(java.lang.String)
//  .predicate(SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate)
//  .recommendation(java.lang.String)
//  .resourceSelector(SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector)
//  .severity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput">customOutput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | custom_output block. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.description">description</a></code> | <code>java.lang.String</code> | Text that describes the vulnerability or misconfiguration that the custom module detects. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | An explanation of the recommended steps that security teams can take to resolve the detected issue. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector">resourceSelector</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | resource_selector block. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity">severity</a></code> | <code>java.lang.String</code> | The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"]. |

---

##### `customOutput`<sup>Optional</sup> <a name="customOutput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.customOutput"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput getCustomOutput();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

custom_output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#custom_output SccManagementFolderSecurityHealthAnalyticsCustomModule#custom_output}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Text that describes the vulnerability or misconfiguration that the custom module detects.

This explanation is returned with each finding instance to
help investigators understand the detected issue. The text must be enclosed in quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#description SccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.predicate"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate getPredicate();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#predicate SccManagementFolderSecurityHealthAnalyticsCustomModule#predicate}

---

##### `recommendation`<sup>Optional</sup> <a name="recommendation" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

An explanation of the recommended steps that security teams can take to resolve the detected issue.

This explanation is returned with each finding generated by
this module in the nextSteps property of the finding JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#recommendation SccManagementFolderSecurityHealthAnalyticsCustomModule#recommendation}

---

##### `resourceSelector`<sup>Optional</sup> <a name="resourceSelector" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.resourceSelector"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector getResourceSelector();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

resource_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#resource_selector SccManagementFolderSecurityHealthAnalyticsCustomModule#resource_selector}

---

##### `severity`<sup>Optional</sup> <a name="severity" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

The severity to assign to findings generated by the module. Possible values: ["CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#severity SccManagementFolderSecurityHealthAnalyticsCustomModule#severity}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput;

SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.builder()
//  .properties(IResolvable)
//  .properties(java.util.List<SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties">properties</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>></code> | properties block. |

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput.property.properties"></a>

```java
public java.lang.Object getProperties();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#properties SccManagementFolderSecurityHealthAnalyticsCustomModule#properties}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties;

SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.builder()
//  .name(java.lang.String)
//  .valueExpression(SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name">name</a></code> | <code>java.lang.String</code> | Name of the property for the custom output. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression">valueExpression</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | value_expression block. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the property for the custom output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#name SccManagementFolderSecurityHealthAnalyticsCustomModule#name}

---

##### `valueExpression`<sup>Optional</sup> <a name="valueExpression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties.property.valueExpression"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression getValueExpression();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

value_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#value_expression SccManagementFolderSecurityHealthAnalyticsCustomModule#value_expression}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression;

SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#expression SccManagementFolderSecurityHealthAnalyticsCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#description SccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#location SccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#title SccManagementFolderSecurityHealthAnalyticsCustomModule#title}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate;

SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#expression SccManagementFolderSecurityHealthAnalyticsCustomModule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

This is a longer text which describes the
expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#description SccManagementFolderSecurityHealthAnalyticsCustomModule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#location SccManagementFolderSecurityHealthAnalyticsCustomModule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#title SccManagementFolderSecurityHealthAnalyticsCustomModule#title}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector;

SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.builder()
    .resourceTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | The resource types to run the detector on. |

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

The resource types to run the detector on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#resource_types SccManagementFolderSecurityHealthAnalyticsCustomModule#resource_types}

---

### SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts;

SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#create SccManagementFolderSecurityHealthAnalyticsCustomModule#create}. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#delete SccManagementFolderSecurityHealthAnalyticsCustomModule#delete}. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#update SccManagementFolderSecurityHealthAnalyticsCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#create SccManagementFolderSecurityHealthAnalyticsCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#delete SccManagementFolderSecurityHealthAnalyticsCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/scc_management_folder_security_health_analytics_custom_module#update SccManagementFolderSecurityHealthAnalyticsCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference;

new SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperties` <a name="putProperties" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties"></a>

```java
public void putProperties(IResolvable OR java.util.List<SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.putProperties.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>>

---

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.properties"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList getProperties();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.propertiesInput"></a>

```java
public java.lang.Object getPropertiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference.property.internalValue"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList;

new SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference;

new SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression">putValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression">resetValueExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueExpression` <a name="putValueExpression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression"></a>

```java
public void putValueExpression(SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.putValueExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `resetName` <a name="resetName" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValueExpression` <a name="resetValueExpression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.resetValueExpression"></a>

```java
public void resetValueExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression">valueExpression</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput">valueExpressionInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueExpression`<sup>Required</sup> <a name="valueExpression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpression"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference getValueExpression();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueExpressionInput`<sup>Optional</sup> <a name="valueExpressionInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.valueExpressionInput"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression getValueExpressionInput();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputProperties</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference;

new SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpressionOutputReference.property.internalValue"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputPropertiesValueExpression</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference;

new SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput">putCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate">putPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector">putResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput">resetCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetPredicate">resetPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetRecommendation">resetRecommendation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetResourceSelector">resetResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetSeverity">resetSeverity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomOutput` <a name="putCustomOutput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput"></a>

```java
public void putCustomOutput(SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putCustomOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `putPredicate` <a name="putPredicate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate"></a>

```java
public void putPredicate(SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `putResourceSelector` <a name="putResourceSelector" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector"></a>

```java
public void putResourceSelector(SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.putResourceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `resetCustomOutput` <a name="resetCustomOutput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetCustomOutput"></a>

```java
public void resetCustomOutput()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetPredicate` <a name="resetPredicate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetPredicate"></a>

```java
public void resetPredicate()
```

##### `resetRecommendation` <a name="resetRecommendation" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetRecommendation"></a>

```java
public void resetRecommendation()
```

##### `resetResourceSelector` <a name="resetResourceSelector" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetResourceSelector"></a>

```java
public void resetResourceSelector()
```

##### `resetSeverity` <a name="resetSeverity" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.resetSeverity"></a>

```java
public void resetSeverity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput">customOutput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector">resourceSelector</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput">customOutputInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput">predicateInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput">recommendationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput">resourceSelectorInput</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation">recommendation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customOutput`<sup>Required</sup> <a name="customOutput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutput"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference getCustomOutput();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutputOutputReference</a>

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicate"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference getPredicate();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference</a>

---

##### `resourceSelector`<sup>Required</sup> <a name="resourceSelector" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelector"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference getResourceSelector();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference</a>

---

##### `customOutputInput`<sup>Optional</sup> <a name="customOutputInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.customOutputInput"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput getCustomOutputInput();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigCustomOutput</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `predicateInput`<sup>Optional</sup> <a name="predicateInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.predicateInput"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate getPredicateInput();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---

##### `recommendationInput`<sup>Optional</sup> <a name="recommendationInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendationInput"></a>

```java
public java.lang.String getRecommendationInput();
```

- *Type:* java.lang.String

---

##### `resourceSelectorInput`<sup>Optional</sup> <a name="resourceSelectorInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.resourceSelectorInput"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector getResourceSelectorInput();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.recommendation"></a>

```java
public java.lang.String getRecommendation();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigOutputReference.property.internalValue"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfig</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference;

new SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicateOutputReference.property.internalValue"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigPredicate</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference;

new SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypesInput"></a>

```java
public java.util.List<java.lang.String> getResourceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.resourceTypes"></a>

```java
public java.util.List<java.lang.String> getResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelectorOutputReference.property.internalValue"></a>

```java
public SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector">SccManagementFolderSecurityHealthAnalyticsCustomModuleCustomConfigResourceSelector</a>

---


### SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference <a name="SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.scc_management_folder_security_health_analytics_custom_module.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference;

new SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.sccManagementFolderSecurityHealthAnalyticsCustomModule.SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts">SccManagementFolderSecurityHealthAnalyticsCustomModuleTimeouts</a>

---



