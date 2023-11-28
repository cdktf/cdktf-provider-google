# `folderAccessApprovalSettings` Submodule <a name="`folderAccessApprovalSettings` Submodule" id="@cdktf/provider-google.folderAccessApprovalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FolderAccessApprovalSettings <a name="FolderAccessApprovalSettings" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings google_folder_access_approval_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.folder_access_approval_settings.FolderAccessApprovalSettings;

FolderAccessApprovalSettings.Builder.create(Construct scope, java.lang.String id)
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
    .enrolledServices(IResolvable)
    .enrolledServices(java.util.List<FolderAccessApprovalSettingsEnrolledServices>)
    .folderId(java.lang.String)
//  .activeKeyVersion(java.lang.String)
//  .id(java.lang.String)
//  .notificationEmails(java.util.List<java.lang.String>)
//  .timeouts(FolderAccessApprovalSettingsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.enrolledServices">enrolledServices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices">FolderAccessApprovalSettingsEnrolledServices</a>></code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.folderId">folderId</a></code> | <code>java.lang.String</code> | ID of the folder of the access approval settings. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.activeKeyVersion">activeKeyVersion</a></code> | <code>java.lang.String</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#id FolderAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.notificationEmails">notificationEmails</a></code> | <code>java.util.List<java.lang.String></code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts">FolderAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enrolledServices`<sup>Required</sup> <a name="enrolledServices" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.enrolledServices"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices">FolderAccessApprovalSettingsEnrolledServices</a>>

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#enrolled_services FolderAccessApprovalSettings#enrolled_services}

---

##### `folderId`<sup>Required</sup> <a name="folderId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.folderId"></a>

- *Type:* java.lang.String

ID of the folder of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#folder_id FolderAccessApprovalSettings#folder_id}

---

##### `activeKeyVersion`<sup>Optional</sup> <a name="activeKeyVersion" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.activeKeyVersion"></a>

- *Type:* java.lang.String

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.
This property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#active_key_version FolderAccessApprovalSettings#active_key_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#id FolderAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationEmails`<sup>Optional</sup> <a name="notificationEmails" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.notificationEmails"></a>

- *Type:* java.util.List<java.lang.String>

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#notification_emails FolderAccessApprovalSettings#notification_emails}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts">FolderAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#timeouts FolderAccessApprovalSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putEnrolledServices">putEnrolledServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetActiveKeyVersion">resetActiveKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetNotificationEmails">resetNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putEnrolledServices` <a name="putEnrolledServices" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putEnrolledServices"></a>

```java
public void putEnrolledServices(IResolvable OR java.util.List<FolderAccessApprovalSettingsEnrolledServices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putEnrolledServices.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices">FolderAccessApprovalSettingsEnrolledServices</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putTimeouts"></a>

```java
public void putTimeouts(FolderAccessApprovalSettingsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts">FolderAccessApprovalSettingsTimeouts</a>

---

##### `resetActiveKeyVersion` <a name="resetActiveKeyVersion" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetActiveKeyVersion"></a>

```java
public void resetActiveKeyVersion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetId"></a>

```java
public void resetId()
```

##### `resetNotificationEmails` <a name="resetNotificationEmails" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetNotificationEmails"></a>

```java
public void resetNotificationEmails()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FolderAccessApprovalSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.folder_access_approval_settings.FolderAccessApprovalSettings;

FolderAccessApprovalSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.folder_access_approval_settings.FolderAccessApprovalSettings;

FolderAccessApprovalSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.folder_access_approval_settings.FolderAccessApprovalSettings;

FolderAccessApprovalSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.folder_access_approval_settings.FolderAccessApprovalSettings;

FolderAccessApprovalSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FolderAccessApprovalSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FolderAccessApprovalSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FolderAccessApprovalSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FolderAccessApprovalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FolderAccessApprovalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.ancestorHasActiveKeyVersion">ancestorHasActiveKeyVersion</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledAncestor">enrolledAncestor</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledServices">enrolledServices</a></code> | <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList">FolderAccessApprovalSettingsEnrolledServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.invalidKeyVersion">invalidKeyVersion</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference">FolderAccessApprovalSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.activeKeyVersionInput">activeKeyVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledServicesInput">enrolledServicesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices">FolderAccessApprovalSettingsEnrolledServices</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.folderIdInput">folderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.notificationEmailsInput">notificationEmailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts">FolderAccessApprovalSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.activeKeyVersion">activeKeyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.folderId">folderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.notificationEmails">notificationEmails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ancestorHasActiveKeyVersion`<sup>Required</sup> <a name="ancestorHasActiveKeyVersion" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.ancestorHasActiveKeyVersion"></a>

```java
public IResolvable getAncestorHasActiveKeyVersion();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enrolledAncestor`<sup>Required</sup> <a name="enrolledAncestor" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledAncestor"></a>

```java
public IResolvable getEnrolledAncestor();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enrolledServices`<sup>Required</sup> <a name="enrolledServices" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledServices"></a>

```java
public FolderAccessApprovalSettingsEnrolledServicesList getEnrolledServices();
```

- *Type:* <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList">FolderAccessApprovalSettingsEnrolledServicesList</a>

---

##### `invalidKeyVersion`<sup>Required</sup> <a name="invalidKeyVersion" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.invalidKeyVersion"></a>

```java
public IResolvable getInvalidKeyVersion();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.timeouts"></a>

```java
public FolderAccessApprovalSettingsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference">FolderAccessApprovalSettingsTimeoutsOutputReference</a>

---

##### `activeKeyVersionInput`<sup>Optional</sup> <a name="activeKeyVersionInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.activeKeyVersionInput"></a>

```java
public java.lang.String getActiveKeyVersionInput();
```

- *Type:* java.lang.String

---

##### `enrolledServicesInput`<sup>Optional</sup> <a name="enrolledServicesInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledServicesInput"></a>

```java
public java.lang.Object getEnrolledServicesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices">FolderAccessApprovalSettingsEnrolledServices</a>>

---

##### `folderIdInput`<sup>Optional</sup> <a name="folderIdInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.folderIdInput"></a>

```java
public java.lang.String getFolderIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `notificationEmailsInput`<sup>Optional</sup> <a name="notificationEmailsInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.notificationEmailsInput"></a>

```java
public java.util.List<java.lang.String> getNotificationEmailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts">FolderAccessApprovalSettingsTimeouts</a>

---

##### `activeKeyVersion`<sup>Required</sup> <a name="activeKeyVersion" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.activeKeyVersion"></a>

```java
public java.lang.String getActiveKeyVersion();
```

- *Type:* java.lang.String

---

##### `folderId`<sup>Required</sup> <a name="folderId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.folderId"></a>

```java
public java.lang.String getFolderId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `notificationEmails`<sup>Required</sup> <a name="notificationEmails" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.notificationEmails"></a>

```java
public java.util.List<java.lang.String> getNotificationEmails();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FolderAccessApprovalSettingsConfig <a name="FolderAccessApprovalSettingsConfig" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.folder_access_approval_settings.FolderAccessApprovalSettingsConfig;

FolderAccessApprovalSettingsConfig.builder()
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
    .enrolledServices(IResolvable)
    .enrolledServices(java.util.List<FolderAccessApprovalSettingsEnrolledServices>)
    .folderId(java.lang.String)
//  .activeKeyVersion(java.lang.String)
//  .id(java.lang.String)
//  .notificationEmails(java.util.List<java.lang.String>)
//  .timeouts(FolderAccessApprovalSettingsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.enrolledServices">enrolledServices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices">FolderAccessApprovalSettingsEnrolledServices</a>></code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.folderId">folderId</a></code> | <code>java.lang.String</code> | ID of the folder of the access approval settings. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.activeKeyVersion">activeKeyVersion</a></code> | <code>java.lang.String</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#id FolderAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.notificationEmails">notificationEmails</a></code> | <code>java.util.List<java.lang.String></code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts">FolderAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enrolledServices`<sup>Required</sup> <a name="enrolledServices" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.enrolledServices"></a>

```java
public java.lang.Object getEnrolledServices();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices">FolderAccessApprovalSettingsEnrolledServices</a>>

enrolled_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#enrolled_services FolderAccessApprovalSettings#enrolled_services}

---

##### `folderId`<sup>Required</sup> <a name="folderId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.folderId"></a>

```java
public java.lang.String getFolderId();
```

- *Type:* java.lang.String

ID of the folder of the access approval settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#folder_id FolderAccessApprovalSettings#folder_id}

---

##### `activeKeyVersion`<sup>Optional</sup> <a name="activeKeyVersion" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.activeKeyVersion"></a>

```java
public java.lang.String getActiveKeyVersion();
```

- *Type:* java.lang.String

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.
This property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#active_key_version FolderAccessApprovalSettings#active_key_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#id FolderAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationEmails`<sup>Optional</sup> <a name="notificationEmails" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.notificationEmails"></a>

```java
public java.util.List<java.lang.String> getNotificationEmails();
```

- *Type:* java.util.List<java.lang.String>

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#notification_emails FolderAccessApprovalSettings#notification_emails}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.timeouts"></a>

```java
public FolderAccessApprovalSettingsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts">FolderAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#timeouts FolderAccessApprovalSettings#timeouts}

---

### FolderAccessApprovalSettingsEnrolledServices <a name="FolderAccessApprovalSettingsEnrolledServices" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.folder_access_approval_settings.FolderAccessApprovalSettingsEnrolledServices;

FolderAccessApprovalSettingsEnrolledServices.builder()
    .cloudProduct(java.lang.String)
//  .enrollmentLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices.property.cloudProduct">cloudProduct</a></code> | <code>java.lang.String</code> | The product for which Access Approval will be enrolled. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices.property.enrollmentLevel">enrollmentLevel</a></code> | <code>java.lang.String</code> | The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"]. |

---

##### `cloudProduct`<sup>Required</sup> <a name="cloudProduct" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices.property.cloudProduct"></a>

```java
public java.lang.String getCloudProduct();
```

- *Type:* java.lang.String

The product for which Access Approval will be enrolled.

Allowed values are listed (case-sensitive):

* all
* App Engine
* BigQuery
* Cloud Bigtable
* Cloud Key Management Service
* Compute Engine
* Cloud Dataflow
* Cloud Identity and Access Management
* Cloud Pub/Sub
* Cloud Storage
* Persistent Disk

Note: These values are supported as input, but considered a legacy format:

* all
* appengine.googleapis.com
* bigquery.googleapis.com
* bigtable.googleapis.com
* cloudkms.googleapis.com
* compute.googleapis.com
* dataflow.googleapis.com
* iam.googleapis.com
* pubsub.googleapis.com
* storage.googleapis.com

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#cloud_product FolderAccessApprovalSettings#cloud_product}

---

##### `enrollmentLevel`<sup>Optional</sup> <a name="enrollmentLevel" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices.property.enrollmentLevel"></a>

```java
public java.lang.String getEnrollmentLevel();
```

- *Type:* java.lang.String

The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#enrollment_level FolderAccessApprovalSettings#enrollment_level}

---

### FolderAccessApprovalSettingsTimeouts <a name="FolderAccessApprovalSettingsTimeouts" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.folder_access_approval_settings.FolderAccessApprovalSettingsTimeouts;

FolderAccessApprovalSettingsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#create FolderAccessApprovalSettings#create}. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#delete FolderAccessApprovalSettings#delete}. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#update FolderAccessApprovalSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#create FolderAccessApprovalSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#delete FolderAccessApprovalSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/folder_access_approval_settings#update FolderAccessApprovalSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FolderAccessApprovalSettingsEnrolledServicesList <a name="FolderAccessApprovalSettingsEnrolledServicesList" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.folder_access_approval_settings.FolderAccessApprovalSettingsEnrolledServicesList;

new FolderAccessApprovalSettingsEnrolledServicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.get"></a>

```java
public FolderAccessApprovalSettingsEnrolledServicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices">FolderAccessApprovalSettingsEnrolledServices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices">FolderAccessApprovalSettingsEnrolledServices</a>>

---


### FolderAccessApprovalSettingsEnrolledServicesOutputReference <a name="FolderAccessApprovalSettingsEnrolledServicesOutputReference" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.folder_access_approval_settings.FolderAccessApprovalSettingsEnrolledServicesOutputReference;

new FolderAccessApprovalSettingsEnrolledServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel">resetEnrollmentLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnrollmentLevel` <a name="resetEnrollmentLevel" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel"></a>

```java
public void resetEnrollmentLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput">cloudProductInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput">enrollmentLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct">cloudProduct</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel">enrollmentLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices">FolderAccessApprovalSettingsEnrolledServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudProductInput`<sup>Optional</sup> <a name="cloudProductInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput"></a>

```java
public java.lang.String getCloudProductInput();
```

- *Type:* java.lang.String

---

##### `enrollmentLevelInput`<sup>Optional</sup> <a name="enrollmentLevelInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput"></a>

```java
public java.lang.String getEnrollmentLevelInput();
```

- *Type:* java.lang.String

---

##### `cloudProduct`<sup>Required</sup> <a name="cloudProduct" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct"></a>

```java
public java.lang.String getCloudProduct();
```

- *Type:* java.lang.String

---

##### `enrollmentLevel`<sup>Required</sup> <a name="enrollmentLevel" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel"></a>

```java
public java.lang.String getEnrollmentLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices">FolderAccessApprovalSettingsEnrolledServices</a>

---


### FolderAccessApprovalSettingsTimeoutsOutputReference <a name="FolderAccessApprovalSettingsTimeoutsOutputReference" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.folder_access_approval_settings.FolderAccessApprovalSettingsTimeoutsOutputReference;

new FolderAccessApprovalSettingsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts">FolderAccessApprovalSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts">FolderAccessApprovalSettingsTimeouts</a>

---



