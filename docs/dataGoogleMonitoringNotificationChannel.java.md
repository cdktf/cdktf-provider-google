# `dataGoogleMonitoringNotificationChannel` Submodule <a name="`dataGoogleMonitoringNotificationChannel` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringNotificationChannel <a name="DataGoogleMonitoringNotificationChannel" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel google_monitoring_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_notification_channel.DataGoogleMonitoringNotificationChannel;

DataGoogleMonitoringNotificationChannel.Builder.create(Construct scope, java.lang.String id)
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
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .type(java.lang.String)
//  .userLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | An optional human-readable name for this notification channel. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#id DataGoogleMonitoringNotificationChannel#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Configuration fields that define the channel and its behavior. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#project DataGoogleMonitoringNotificationChannel#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the notification channel. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

An optional human-readable name for this notification channel.

It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#display_name DataGoogleMonitoringNotificationChannel#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#id DataGoogleMonitoringNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Configuration fields that define the channel and its behavior.

The
permissible and required labels are specified in the
NotificationChannelDescriptor corresponding to the type field.

Labels with sensitive data are obfuscated by the API and therefore Terraform cannot
determine if there are upstream changes to these fields. They can also be configured via
the sensitive_labels block, but cannot be configured in both places.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#labels DataGoogleMonitoringNotificationChannel#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#project DataGoogleMonitoringNotificationChannel#project}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the notification channel.

This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#type DataGoogleMonitoringNotificationChannel#type}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.userLabels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field.

This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#user_labels DataGoogleMonitoringNotificationChannel#user_labels}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetUserLabels">resetUserLabels</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetProject"></a>

```java
public void resetProject()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetType"></a>

```java
public void resetType()
```

##### `resetUserLabels` <a name="resetUserLabels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetUserLabels"></a>

```java
public void resetUserLabels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleMonitoringNotificationChannel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_notification_channel.DataGoogleMonitoringNotificationChannel;

DataGoogleMonitoringNotificationChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_notification_channel.DataGoogleMonitoringNotificationChannel;

DataGoogleMonitoringNotificationChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_notification_channel.DataGoogleMonitoringNotificationChannel;

DataGoogleMonitoringNotificationChannel.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_notification_channel.DataGoogleMonitoringNotificationChannel;

DataGoogleMonitoringNotificationChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleMonitoringNotificationChannel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleMonitoringNotificationChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleMonitoringNotificationChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleMonitoringNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleMonitoringNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.forceDelete">forceDelete</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.sensitiveLabels">sensitiveLabels</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList">DataGoogleMonitoringNotificationChannelSensitiveLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.verificationStatus">verificationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.userLabelsInput">userLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.forceDelete"></a>

```java
public IResolvable getForceDelete();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sensitiveLabels`<sup>Required</sup> <a name="sensitiveLabels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.sensitiveLabels"></a>

```java
public DataGoogleMonitoringNotificationChannelSensitiveLabelsList getSensitiveLabels();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList">DataGoogleMonitoringNotificationChannelSensitiveLabelsList</a>

---

##### `verificationStatus`<sup>Required</sup> <a name="verificationStatus" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.verificationStatus"></a>

```java
public java.lang.String getVerificationStatus();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userLabelsInput`<sup>Optional</sup> <a name="userLabelsInput" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.userLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringNotificationChannelConfig <a name="DataGoogleMonitoringNotificationChannelConfig" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_notification_channel.DataGoogleMonitoringNotificationChannelConfig;

DataGoogleMonitoringNotificationChannelConfig.builder()
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
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .type(java.lang.String)
//  .userLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | An optional human-readable name for this notification channel. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#id DataGoogleMonitoringNotificationChannel#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Configuration fields that define the channel and its behavior. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#project DataGoogleMonitoringNotificationChannel#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the notification channel. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

An optional human-readable name for this notification channel.

It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#display_name DataGoogleMonitoringNotificationChannel#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#id DataGoogleMonitoringNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Configuration fields that define the channel and its behavior.

The
permissible and required labels are specified in the
NotificationChannelDescriptor corresponding to the type field.

Labels with sensitive data are obfuscated by the API and therefore Terraform cannot
determine if there are upstream changes to these fields. They can also be configured via
the sensitive_labels block, but cannot be configured in both places.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#labels DataGoogleMonitoringNotificationChannel#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#project DataGoogleMonitoringNotificationChannel#project}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the notification channel.

This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#type DataGoogleMonitoringNotificationChannel#type}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field.

This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/data-sources/monitoring_notification_channel#user_labels DataGoogleMonitoringNotificationChannel#user_labels}

---

### DataGoogleMonitoringNotificationChannelSensitiveLabels <a name="DataGoogleMonitoringNotificationChannelSensitiveLabels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_notification_channel.DataGoogleMonitoringNotificationChannelSensitiveLabels;

DataGoogleMonitoringNotificationChannelSensitiveLabels.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringNotificationChannelSensitiveLabelsList <a name="DataGoogleMonitoringNotificationChannelSensitiveLabelsList" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_notification_channel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList;

new DataGoogleMonitoringNotificationChannelSensitiveLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.get"></a>

```java
public DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference <a name="DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.data_google_monitoring_notification_channel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference;

new DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken">authToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey">serviceKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels">DataGoogleMonitoringNotificationChannelSensitiveLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authToken`<sup>Required</sup> <a name="authToken" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken"></a>

```java
public java.lang.String getAuthToken();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `serviceKey`<sup>Required</sup> <a name="serviceKey" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey"></a>

```java
public java.lang.String getServiceKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue"></a>

```java
public DataGoogleMonitoringNotificationChannelSensitiveLabels getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels">DataGoogleMonitoringNotificationChannelSensitiveLabels</a>

---



