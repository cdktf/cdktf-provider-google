# `google_cloudiot_registry`

Refer to the Terraform Registory for docs: [`google_cloudiot_registry`](https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry).

# `cloudiotRegistry` Submodule <a name="`cloudiotRegistry` Submodule" id="@cdktf/provider-google.cloudiotRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudiotRegistry <a name="CloudiotRegistry" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry google_cloudiot_registry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudiot_registry.CloudiotRegistry;

CloudiotRegistry.Builder.create(Construct scope, java.lang.String id)
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
//  .credentials(IResolvable)
//  .credentials(java.util.List<CloudiotRegistryCredentials>)
//  .eventNotificationConfigs(IResolvable)
//  .eventNotificationConfigs(java.util.List<CloudiotRegistryEventNotificationConfigs>)
//  .httpConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .logLevel(java.lang.String)
//  .mqttConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .stateNotificationConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CloudiotRegistryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A unique name for the resource, required by device registry. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.credentials">credentials</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>></code> | credentials block. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.eventNotificationConfigs">eventNotificationConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>></code> | event_notification_configs block. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.httpConfig">httpConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Activate or deactivate HTTP. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#id CloudiotRegistry#id}. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.logLevel">logLevel</a></code> | <code>java.lang.String</code> | The default logging verbosity for activity from devices in this registry. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.mqttConfig">mqttConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Activate or deactivate MQTT. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#project CloudiotRegistry#project}. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region in which the created registry should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.stateNotificationConfig">stateNotificationConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A PubSub topic to publish device state updates. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A unique name for the resource, required by device registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#name CloudiotRegistry#name}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.credentials"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#credentials CloudiotRegistry#credentials}

---

##### `eventNotificationConfigs`<sup>Optional</sup> <a name="eventNotificationConfigs" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.eventNotificationConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>>

event_notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#event_notification_configs CloudiotRegistry#event_notification_configs}

---

##### `httpConfig`<sup>Optional</sup> <a name="httpConfig" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.httpConfig"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Activate or deactivate HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#http_config CloudiotRegistry#http_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#id CloudiotRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.logLevel"></a>

- *Type:* java.lang.String

The default logging verbosity for activity from devices in this registry.

Specifies which events should be written to logs. For
example, if the LogLevel is ERROR, only events that terminate in
errors will be logged. LogLevel is inclusive; enabling INFO logging
will also enable ERROR logging. Default value: "NONE" Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#log_level CloudiotRegistry#log_level}

---

##### `mqttConfig`<sup>Optional</sup> <a name="mqttConfig" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.mqttConfig"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Activate or deactivate MQTT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#mqtt_config CloudiotRegistry#mqtt_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#project CloudiotRegistry#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region in which the created registry should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#region CloudiotRegistry#region}

---

##### `stateNotificationConfig`<sup>Optional</sup> <a name="stateNotificationConfig" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.stateNotificationConfig"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A PubSub topic to publish device state updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#state_notification_config CloudiotRegistry#state_notification_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#timeouts CloudiotRegistry#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putEventNotificationConfigs">putEventNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetEventNotificationConfigs">resetEventNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetHttpConfig">resetHttpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetMqttConfig">resetMqttConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetStateNotificationConfig">resetStateNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCredentials` <a name="putCredentials" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putCredentials"></a>

```java
public void putCredentials(IResolvable OR java.util.List<CloudiotRegistryCredentials> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putCredentials.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>>

---

##### `putEventNotificationConfigs` <a name="putEventNotificationConfigs" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putEventNotificationConfigs"></a>

```java
public void putEventNotificationConfigs(IResolvable OR java.util.List<CloudiotRegistryEventNotificationConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putEventNotificationConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putTimeouts"></a>

```java
public void putTimeouts(CloudiotRegistryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a>

---

##### `resetCredentials` <a name="resetCredentials" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetEventNotificationConfigs` <a name="resetEventNotificationConfigs" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetEventNotificationConfigs"></a>

```java
public void resetEventNotificationConfigs()
```

##### `resetHttpConfig` <a name="resetHttpConfig" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetHttpConfig"></a>

```java
public void resetHttpConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetId"></a>

```java
public void resetId()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetMqttConfig` <a name="resetMqttConfig" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetMqttConfig"></a>

```java
public void resetMqttConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStateNotificationConfig` <a name="resetStateNotificationConfig" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetStateNotificationConfig"></a>

```java
public void resetStateNotificationConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudiot_registry.CloudiotRegistry;

CloudiotRegistry.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudiot_registry.CloudiotRegistry;

CloudiotRegistry.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudiot_registry.CloudiotRegistry;

CloudiotRegistry.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList">CloudiotRegistryCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.eventNotificationConfigs">eventNotificationConfigs</a></code> | <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList">CloudiotRegistryEventNotificationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference">CloudiotRegistryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.credentialsInput">credentialsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.eventNotificationConfigsInput">eventNotificationConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.httpConfigInput">httpConfigInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.mqttConfigInput">mqttConfigInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.stateNotificationConfigInput">stateNotificationConfigInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.httpConfig">httpConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.mqttConfig">mqttConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.stateNotificationConfig">stateNotificationConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.credentials"></a>

```java
public CloudiotRegistryCredentialsList getCredentials();
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList">CloudiotRegistryCredentialsList</a>

---

##### `eventNotificationConfigs`<sup>Required</sup> <a name="eventNotificationConfigs" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.eventNotificationConfigs"></a>

```java
public CloudiotRegistryEventNotificationConfigsList getEventNotificationConfigs();
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList">CloudiotRegistryEventNotificationConfigsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.timeouts"></a>

```java
public CloudiotRegistryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference">CloudiotRegistryTimeoutsOutputReference</a>

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.credentialsInput"></a>

```java
public java.lang.Object getCredentialsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>>

---

##### `eventNotificationConfigsInput`<sup>Optional</sup> <a name="eventNotificationConfigsInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.eventNotificationConfigsInput"></a>

```java
public java.lang.Object getEventNotificationConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>>

---

##### `httpConfigInput`<sup>Optional</sup> <a name="httpConfigInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.httpConfigInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHttpConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `mqttConfigInput`<sup>Optional</sup> <a name="mqttConfigInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.mqttConfigInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMqttConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `stateNotificationConfigInput`<sup>Optional</sup> <a name="stateNotificationConfigInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.stateNotificationConfigInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStateNotificationConfigInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a>

---

##### `httpConfig`<sup>Required</sup> <a name="httpConfig" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.httpConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHttpConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `mqttConfig`<sup>Required</sup> <a name="mqttConfig" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.mqttConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMqttConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `stateNotificationConfig`<sup>Required</sup> <a name="stateNotificationConfig" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.stateNotificationConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStateNotificationConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistry.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudiotRegistryConfig <a name="CloudiotRegistryConfig" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudiot_registry.CloudiotRegistryConfig;

CloudiotRegistryConfig.builder()
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
//  .credentials(IResolvable)
//  .credentials(java.util.List<CloudiotRegistryCredentials>)
//  .eventNotificationConfigs(IResolvable)
//  .eventNotificationConfigs(java.util.List<CloudiotRegistryEventNotificationConfigs>)
//  .httpConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .logLevel(java.lang.String)
//  .mqttConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .stateNotificationConfig(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CloudiotRegistryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.name">name</a></code> | <code>java.lang.String</code> | A unique name for the resource, required by device registry. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.credentials">credentials</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>></code> | credentials block. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.eventNotificationConfigs">eventNotificationConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>></code> | event_notification_configs block. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.httpConfig">httpConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Activate or deactivate HTTP. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#id CloudiotRegistry#id}. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | The default logging verbosity for activity from devices in this registry. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.mqttConfig">mqttConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Activate or deactivate MQTT. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#project CloudiotRegistry#project}. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region in which the created registry should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.stateNotificationConfig">stateNotificationConfig</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A PubSub topic to publish device state updates. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique name for the resource, required by device registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#name CloudiotRegistry#name}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.credentials"></a>

```java
public java.lang.Object getCredentials();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#credentials CloudiotRegistry#credentials}

---

##### `eventNotificationConfigs`<sup>Optional</sup> <a name="eventNotificationConfigs" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.eventNotificationConfigs"></a>

```java
public java.lang.Object getEventNotificationConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>>

event_notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#event_notification_configs CloudiotRegistry#event_notification_configs}

---

##### `httpConfig`<sup>Optional</sup> <a name="httpConfig" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.httpConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHttpConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Activate or deactivate HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#http_config CloudiotRegistry#http_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#id CloudiotRegistry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

The default logging verbosity for activity from devices in this registry.

Specifies which events should be written to logs. For
example, if the LogLevel is ERROR, only events that terminate in
errors will be logged. LogLevel is inclusive; enabling INFO logging
will also enable ERROR logging. Default value: "NONE" Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#log_level CloudiotRegistry#log_level}

---

##### `mqttConfig`<sup>Optional</sup> <a name="mqttConfig" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.mqttConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMqttConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Activate or deactivate MQTT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#mqtt_config CloudiotRegistry#mqtt_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#project CloudiotRegistry#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region in which the created registry should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#region CloudiotRegistry#region}

---

##### `stateNotificationConfig`<sup>Optional</sup> <a name="stateNotificationConfig" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.stateNotificationConfig"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStateNotificationConfig();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A PubSub topic to publish device state updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#state_notification_config CloudiotRegistry#state_notification_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryConfig.property.timeouts"></a>

```java
public CloudiotRegistryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#timeouts CloudiotRegistry#timeouts}

---

### CloudiotRegistryCredentials <a name="CloudiotRegistryCredentials" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudiot_registry.CloudiotRegistryCredentials;

CloudiotRegistryCredentials.builder()
    .publicKeyCertificate(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials.property.publicKeyCertificate">publicKeyCertificate</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A public key certificate format and data. |

---

##### `publicKeyCertificate`<sup>Required</sup> <a name="publicKeyCertificate" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials.property.publicKeyCertificate"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPublicKeyCertificate();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A public key certificate format and data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#public_key_certificate CloudiotRegistry#public_key_certificate}

---

### CloudiotRegistryEventNotificationConfigs <a name="CloudiotRegistryEventNotificationConfigs" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudiot_registry.CloudiotRegistryEventNotificationConfigs;

CloudiotRegistryEventNotificationConfigs.builder()
    .pubsubTopicName(java.lang.String)
//  .subfolderMatches(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs.property.pubsubTopicName">pubsubTopicName</a></code> | <code>java.lang.String</code> | PubSub topic name to publish device events. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs.property.subfolderMatches">subfolderMatches</a></code> | <code>java.lang.String</code> | If the subfolder name matches this string exactly, this configuration will be used. |

---

##### `pubsubTopicName`<sup>Required</sup> <a name="pubsubTopicName" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs.property.pubsubTopicName"></a>

```java
public java.lang.String getPubsubTopicName();
```

- *Type:* java.lang.String

PubSub topic name to publish device events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#pubsub_topic_name CloudiotRegistry#pubsub_topic_name}

---

##### `subfolderMatches`<sup>Optional</sup> <a name="subfolderMatches" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs.property.subfolderMatches"></a>

```java
public java.lang.String getSubfolderMatches();
```

- *Type:* java.lang.String

If the subfolder name matches this string exactly, this configuration will be used.

The string must not include the
leading '/' character. If empty, all strings are matched. Empty
value can only be used for the last 'event_notification_configs'
item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#subfolder_matches CloudiotRegistry#subfolder_matches}

---

### CloudiotRegistryTimeouts <a name="CloudiotRegistryTimeouts" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudiot_registry.CloudiotRegistryTimeouts;

CloudiotRegistryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#create CloudiotRegistry#create}. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#delete CloudiotRegistry#delete}. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#update CloudiotRegistry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#create CloudiotRegistry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#delete CloudiotRegistry#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/cloudiot_registry#update CloudiotRegistry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudiotRegistryCredentialsList <a name="CloudiotRegistryCredentialsList" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudiot_registry.CloudiotRegistryCredentialsList;

new CloudiotRegistryCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.get"></a>

```java
public CloudiotRegistryCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>>

---


### CloudiotRegistryCredentialsOutputReference <a name="CloudiotRegistryCredentialsOutputReference" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudiot_registry.CloudiotRegistryCredentialsOutputReference;

new CloudiotRegistryCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.publicKeyCertificateInput">publicKeyCertificateInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.publicKeyCertificate">publicKeyCertificate</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicKeyCertificateInput`<sup>Optional</sup> <a name="publicKeyCertificateInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.publicKeyCertificateInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPublicKeyCertificateInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `publicKeyCertificate`<sup>Required</sup> <a name="publicKeyCertificate" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.publicKeyCertificate"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPublicKeyCertificate();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentialsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryCredentials">CloudiotRegistryCredentials</a>

---


### CloudiotRegistryEventNotificationConfigsList <a name="CloudiotRegistryEventNotificationConfigsList" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudiot_registry.CloudiotRegistryEventNotificationConfigsList;

new CloudiotRegistryEventNotificationConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.get"></a>

```java
public CloudiotRegistryEventNotificationConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>>

---


### CloudiotRegistryEventNotificationConfigsOutputReference <a name="CloudiotRegistryEventNotificationConfigsOutputReference" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudiot_registry.CloudiotRegistryEventNotificationConfigsOutputReference;

new CloudiotRegistryEventNotificationConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.resetSubfolderMatches">resetSubfolderMatches</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubfolderMatches` <a name="resetSubfolderMatches" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.resetSubfolderMatches"></a>

```java
public void resetSubfolderMatches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.pubsubTopicNameInput">pubsubTopicNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.subfolderMatchesInput">subfolderMatchesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.pubsubTopicName">pubsubTopicName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.subfolderMatches">subfolderMatches</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pubsubTopicNameInput`<sup>Optional</sup> <a name="pubsubTopicNameInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.pubsubTopicNameInput"></a>

```java
public java.lang.String getPubsubTopicNameInput();
```

- *Type:* java.lang.String

---

##### `subfolderMatchesInput`<sup>Optional</sup> <a name="subfolderMatchesInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.subfolderMatchesInput"></a>

```java
public java.lang.String getSubfolderMatchesInput();
```

- *Type:* java.lang.String

---

##### `pubsubTopicName`<sup>Required</sup> <a name="pubsubTopicName" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.pubsubTopicName"></a>

```java
public java.lang.String getPubsubTopicName();
```

- *Type:* java.lang.String

---

##### `subfolderMatches`<sup>Required</sup> <a name="subfolderMatches" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.subfolderMatches"></a>

```java
public java.lang.String getSubfolderMatches();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryEventNotificationConfigs">CloudiotRegistryEventNotificationConfigs</a>

---


### CloudiotRegistryTimeoutsOutputReference <a name="CloudiotRegistryTimeoutsOutputReference" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudiot_registry.CloudiotRegistryTimeoutsOutputReference;

new CloudiotRegistryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudiotRegistry.CloudiotRegistryTimeouts">CloudiotRegistryTimeouts</a>

---



