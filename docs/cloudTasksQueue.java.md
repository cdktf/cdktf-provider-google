# `cloudTasksQueue` Submodule <a name="`cloudTasksQueue` Submodule" id="@cdktf/provider-google.cloudTasksQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudTasksQueue <a name="CloudTasksQueue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue google_cloud_tasks_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueue;

CloudTasksQueue.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
//  .appEngineRoutingOverride(CloudTasksQueueAppEngineRoutingOverride)
//  .httpTarget(CloudTasksQueueHttpTarget)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .rateLimits(CloudTasksQueueRateLimits)
//  .retryConfig(CloudTasksQueueRetryConfig)
//  .stackdriverLoggingConfig(CloudTasksQueueStackdriverLoggingConfig)
//  .timeouts(CloudTasksQueueTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the queue. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.appEngineRoutingOverride">appEngineRoutingOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a></code> | app_engine_routing_override block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The queue name. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.rateLimits">rateLimits</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a></code> | rate_limits block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.stackdriverLoggingConfig">stackdriverLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a></code> | stackdriver_logging_config block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#location CloudTasksQueue#location}

---

##### `appEngineRoutingOverride`<sup>Optional</sup> <a name="appEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.appEngineRoutingOverride"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

app_engine_routing_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#app_engine_routing_override CloudTasksQueue#app_engine_routing_override}

---

##### `httpTarget`<sup>Optional</sup> <a name="httpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.httpTarget"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#http_target CloudTasksQueue#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The queue name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#name CloudTasksQueue#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}.

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.rateLimits"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#rate_limits CloudTasksQueue#rate_limits}

---

##### `retryConfig`<sup>Optional</sup> <a name="retryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.retryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#retry_config CloudTasksQueue#retry_config}

---

##### `stackdriverLoggingConfig`<sup>Optional</sup> <a name="stackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.stackdriverLoggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

stackdriver_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#stackdriver_logging_config CloudTasksQueue#stackdriver_logging_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#timeouts CloudTasksQueue#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride">putAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putHttpTarget">putHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRateLimits">putRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig">putRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putStackdriverLoggingConfig">putStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetAppEngineRoutingOverride">resetAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetHttpTarget">resetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetRateLimits">resetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetRetryConfig">resetRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetStackdriverLoggingConfig">resetStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppEngineRoutingOverride` <a name="putAppEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride"></a>

```java
public void putAppEngineRoutingOverride(CloudTasksQueueAppEngineRoutingOverride value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

---

##### `putHttpTarget` <a name="putHttpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putHttpTarget"></a>

```java
public void putHttpTarget(CloudTasksQueueHttpTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

---

##### `putRateLimits` <a name="putRateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRateLimits"></a>

```java
public void putRateLimits(CloudTasksQueueRateLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRateLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

---

##### `putRetryConfig` <a name="putRetryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig"></a>

```java
public void putRetryConfig(CloudTasksQueueRetryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

---

##### `putStackdriverLoggingConfig` <a name="putStackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putStackdriverLoggingConfig"></a>

```java
public void putStackdriverLoggingConfig(CloudTasksQueueStackdriverLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putStackdriverLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts"></a>

```java
public void putTimeouts(CloudTasksQueueTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>

---

##### `resetAppEngineRoutingOverride` <a name="resetAppEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetAppEngineRoutingOverride"></a>

```java
public void resetAppEngineRoutingOverride()
```

##### `resetHttpTarget` <a name="resetHttpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetHttpTarget"></a>

```java
public void resetHttpTarget()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetName"></a>

```java
public void resetName()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetProject"></a>

```java
public void resetProject()
```

##### `resetRateLimits` <a name="resetRateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetRateLimits"></a>

```java
public void resetRateLimits()
```

##### `resetRetryConfig` <a name="resetRetryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetRetryConfig"></a>

```java
public void resetRetryConfig()
```

##### `resetStackdriverLoggingConfig` <a name="resetStackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetStackdriverLoggingConfig"></a>

```java
public void resetStackdriverLoggingConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudTasksQueue resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueue;

CloudTasksQueue.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueue;

CloudTasksQueue.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueue;

CloudTasksQueue.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueue;

CloudTasksQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudTasksQueue.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudTasksQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudTasksQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudTasksQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudTasksQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverride">appEngineRoutingOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference">CloudTasksQueueAppEngineRoutingOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference">CloudTasksQueueHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference">CloudTasksQueueRateLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference">CloudTasksQueueRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfig">stackdriverLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference">CloudTasksQueueStackdriverLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference">CloudTasksQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverrideInput">appEngineRoutingOverrideInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.httpTargetInput">httpTargetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimitsInput">rateLimitsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfigInput">retryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfigInput">stackdriverLoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appEngineRoutingOverride`<sup>Required</sup> <a name="appEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverride"></a>

```java
public CloudTasksQueueAppEngineRoutingOverrideOutputReference getAppEngineRoutingOverride();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference">CloudTasksQueueAppEngineRoutingOverrideOutputReference</a>

---

##### `httpTarget`<sup>Required</sup> <a name="httpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.httpTarget"></a>

```java
public CloudTasksQueueHttpTargetOutputReference getHttpTarget();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference">CloudTasksQueueHttpTargetOutputReference</a>

---

##### `rateLimits`<sup>Required</sup> <a name="rateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimits"></a>

```java
public CloudTasksQueueRateLimitsOutputReference getRateLimits();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference">CloudTasksQueueRateLimitsOutputReference</a>

---

##### `retryConfig`<sup>Required</sup> <a name="retryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfig"></a>

```java
public CloudTasksQueueRetryConfigOutputReference getRetryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference">CloudTasksQueueRetryConfigOutputReference</a>

---

##### `stackdriverLoggingConfig`<sup>Required</sup> <a name="stackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfig"></a>

```java
public CloudTasksQueueStackdriverLoggingConfigOutputReference getStackdriverLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference">CloudTasksQueueStackdriverLoggingConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeouts"></a>

```java
public CloudTasksQueueTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference">CloudTasksQueueTimeoutsOutputReference</a>

---

##### `appEngineRoutingOverrideInput`<sup>Optional</sup> <a name="appEngineRoutingOverrideInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverrideInput"></a>

```java
public CloudTasksQueueAppEngineRoutingOverride getAppEngineRoutingOverrideInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

---

##### `httpTargetInput`<sup>Optional</sup> <a name="httpTargetInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.httpTargetInput"></a>

```java
public CloudTasksQueueHttpTarget getHttpTargetInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rateLimitsInput`<sup>Optional</sup> <a name="rateLimitsInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimitsInput"></a>

```java
public CloudTasksQueueRateLimits getRateLimitsInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

---

##### `retryConfigInput`<sup>Optional</sup> <a name="retryConfigInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfigInput"></a>

```java
public CloudTasksQueueRetryConfig getRetryConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

---

##### `stackdriverLoggingConfigInput`<sup>Optional</sup> <a name="stackdriverLoggingConfigInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfigInput"></a>

```java
public CloudTasksQueueStackdriverLoggingConfig getStackdriverLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudTasksQueueAppEngineRoutingOverride <a name="CloudTasksQueueAppEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueAppEngineRoutingOverride;

CloudTasksQueueAppEngineRoutingOverride.builder()
//  .instance(java.lang.String)
//  .service(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.instance">instance</a></code> | <code>java.lang.String</code> | App instance. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.service">service</a></code> | <code>java.lang.String</code> | App service. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.version">version</a></code> | <code>java.lang.String</code> | App version. |

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

App instance.

By default, the task is sent to an instance which is available when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#instance CloudTasksQueue#instance}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

App service.

By default, the task is sent to the service which is the default service when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#service CloudTasksQueue#service}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

App version.

By default, the task is sent to the version which is the default version when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#version CloudTasksQueue#version}

---

### CloudTasksQueueConfig <a name="CloudTasksQueueConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueConfig;

CloudTasksQueueConfig.builder()
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
    .location(java.lang.String)
//  .appEngineRoutingOverride(CloudTasksQueueAppEngineRoutingOverride)
//  .httpTarget(CloudTasksQueueHttpTarget)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .rateLimits(CloudTasksQueueRateLimits)
//  .retryConfig(CloudTasksQueueRetryConfig)
//  .stackdriverLoggingConfig(CloudTasksQueueStackdriverLoggingConfig)
//  .timeouts(CloudTasksQueueTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the queue. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.appEngineRoutingOverride">appEngineRoutingOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a></code> | app_engine_routing_override block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.httpTarget">httpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.name">name</a></code> | <code>java.lang.String</code> | The queue name. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a></code> | rate_limits block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.retryConfig">retryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.stackdriverLoggingConfig">stackdriverLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a></code> | stackdriver_logging_config block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#location CloudTasksQueue#location}

---

##### `appEngineRoutingOverride`<sup>Optional</sup> <a name="appEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.appEngineRoutingOverride"></a>

```java
public CloudTasksQueueAppEngineRoutingOverride getAppEngineRoutingOverride();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

app_engine_routing_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#app_engine_routing_override CloudTasksQueue#app_engine_routing_override}

---

##### `httpTarget`<sup>Optional</sup> <a name="httpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.httpTarget"></a>

```java
public CloudTasksQueueHttpTarget getHttpTarget();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#http_target CloudTasksQueue#http_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The queue name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#name CloudTasksQueue#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}.

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.rateLimits"></a>

```java
public CloudTasksQueueRateLimits getRateLimits();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#rate_limits CloudTasksQueue#rate_limits}

---

##### `retryConfig`<sup>Optional</sup> <a name="retryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.retryConfig"></a>

```java
public CloudTasksQueueRetryConfig getRetryConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#retry_config CloudTasksQueue#retry_config}

---

##### `stackdriverLoggingConfig`<sup>Optional</sup> <a name="stackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.stackdriverLoggingConfig"></a>

```java
public CloudTasksQueueStackdriverLoggingConfig getStackdriverLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

stackdriver_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#stackdriver_logging_config CloudTasksQueue#stackdriver_logging_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.timeouts"></a>

```java
public CloudTasksQueueTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#timeouts CloudTasksQueue#timeouts}

---

### CloudTasksQueueHttpTarget <a name="CloudTasksQueueHttpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTarget;

CloudTasksQueueHttpTarget.builder()
//  .headerOverrides(IResolvable)
//  .headerOverrides(java.util.List<CloudTasksQueueHttpTargetHeaderOverrides>)
//  .httpMethod(java.lang.String)
//  .oauthToken(CloudTasksQueueHttpTargetOauthToken)
//  .oidcToken(CloudTasksQueueHttpTargetOidcToken)
//  .uriOverride(CloudTasksQueueHttpTargetUriOverride)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.headerOverrides">headerOverrides</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>></code> | header_overrides block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | The HTTP method to use for the request. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.oauthToken">oauthToken</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a></code> | oauth_token block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a></code> | oidc_token block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.uriOverride">uriOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a></code> | uri_override block. |

---

##### `headerOverrides`<sup>Optional</sup> <a name="headerOverrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.headerOverrides"></a>

```java
public java.lang.Object getHeaderOverrides();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>>

header_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#header_overrides CloudTasksQueue#header_overrides}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

The HTTP method to use for the request.

When specified, it overrides HttpRequest for the task.
Note that if the value is set to GET the body of the task will be ignored at execution time. Possible values: ["HTTP_METHOD_UNSPECIFIED", "POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#http_method CloudTasksQueue#http_method}

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.oauthToken"></a>

```java
public CloudTasksQueueHttpTargetOauthToken getOauthToken();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#oauth_token CloudTasksQueue#oauth_token}

---

##### `oidcToken`<sup>Optional</sup> <a name="oidcToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.oidcToken"></a>

```java
public CloudTasksQueueHttpTargetOidcToken getOidcToken();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#oidc_token CloudTasksQueue#oidc_token}

---

##### `uriOverride`<sup>Optional</sup> <a name="uriOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.uriOverride"></a>

```java
public CloudTasksQueueHttpTargetUriOverride getUriOverride();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a>

uri_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#uri_override CloudTasksQueue#uri_override}

---

### CloudTasksQueueHttpTargetHeaderOverrides <a name="CloudTasksQueueHttpTargetHeaderOverrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTargetHeaderOverrides;

CloudTasksQueueHttpTargetHeaderOverrides.builder()
    .header(CloudTasksQueueHttpTargetHeaderOverridesHeader)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides.property.header">header</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | header block. |

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides.property.header"></a>

```java
public CloudTasksQueueHttpTargetHeaderOverridesHeader getHeader();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#header CloudTasksQueue#header}

---

### CloudTasksQueueHttpTargetHeaderOverridesHeader <a name="CloudTasksQueueHttpTargetHeaderOverridesHeader" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTargetHeaderOverridesHeader;

CloudTasksQueueHttpTargetHeaderOverridesHeader.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.property.key">key</a></code> | <code>java.lang.String</code> | The Key of the header. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.property.value">value</a></code> | <code>java.lang.String</code> | The Value of the header. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The Key of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#key CloudTasksQueue#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The Value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#value CloudTasksQueue#value}

---

### CloudTasksQueueHttpTargetOauthToken <a name="CloudTasksQueueHttpTargetOauthToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTargetOauthToken;

CloudTasksQueueHttpTargetOauthToken.builder()
    .serviceAccountEmail(java.lang.String)
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.property.scope">scope</a></code> | <code>java.lang.String</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

Service account email to be used for generating OAuth token.

The service account must be within the same project as the queue.
The caller must have iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#service_account_email CloudTasksQueue#service_account_email}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#scope CloudTasksQueue#scope}

---

### CloudTasksQueueHttpTargetOidcToken <a name="CloudTasksQueueHttpTargetOidcToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTargetOidcToken;

CloudTasksQueueHttpTargetOidcToken.builder()
    .serviceAccountEmail(java.lang.String)
//  .audience(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Service account email to be used for generating OIDC token. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.property.audience">audience</a></code> | <code>java.lang.String</code> | Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used. |

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

Service account email to be used for generating OIDC token.

The service account must be within the same project as the queue.
The caller must have iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#service_account_email CloudTasksQueue#service_account_email}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#audience CloudTasksQueue#audience}

---

### CloudTasksQueueHttpTargetUriOverride <a name="CloudTasksQueueHttpTargetUriOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTargetUriOverride;

CloudTasksQueueHttpTargetUriOverride.builder()
//  .host(java.lang.String)
//  .pathOverride(CloudTasksQueueHttpTargetUriOverridePathOverride)
//  .port(java.lang.String)
//  .queryOverride(CloudTasksQueueHttpTargetUriOverrideQueryOverride)
//  .scheme(java.lang.String)
//  .uriOverrideEnforceMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.host">host</a></code> | <code>java.lang.String</code> | Host override. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.pathOverride">pathOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | path_override block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.port">port</a></code> | <code>java.lang.String</code> | Port override. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.queryOverride">queryOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | query_override block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.scheme">scheme</a></code> | <code>java.lang.String</code> | Scheme override. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.uriOverrideEnforceMode">uriOverrideEnforceMode</a></code> | <code>java.lang.String</code> | URI Override Enforce Mode. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Host override.

When specified, replaces the host part of the task URL.
For example, if the task URL is "https://www.google.com", and host value
is set to "example.net", the overridden URI will be changed to "https://example.net".
Host value cannot be an empty string (INVALID_ARGUMENT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#host CloudTasksQueue#host}

---

##### `pathOverride`<sup>Optional</sup> <a name="pathOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.pathOverride"></a>

```java
public CloudTasksQueueHttpTargetUriOverridePathOverride getPathOverride();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a>

path_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#path_override CloudTasksQueue#path_override}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

Port override.

When specified, replaces the port part of the task URI.
For instance, for a URI http://www.google.com/foo and port=123, the overridden URI becomes http://www.google.com:123/foo.
Note that the port value must be a positive integer.
Setting the port to 0 (Zero) clears the URI port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#port CloudTasksQueue#port}

---

##### `queryOverride`<sup>Optional</sup> <a name="queryOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.queryOverride"></a>

```java
public CloudTasksQueueHttpTargetUriOverrideQueryOverride getQueryOverride();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

query_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#query_override CloudTasksQueue#query_override}

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

Scheme override.

When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS). Possible values: ["HTTP", "HTTPS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#scheme CloudTasksQueue#scheme}

---

##### `uriOverrideEnforceMode`<sup>Optional</sup> <a name="uriOverrideEnforceMode" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.uriOverrideEnforceMode"></a>

```java
public java.lang.String getUriOverrideEnforceMode();
```

- *Type:* java.lang.String

URI Override Enforce Mode.

When specified, determines the Target UriOverride mode. If not specified, it defaults to ALWAYS. Possible values: ["ALWAYS", "IF_NOT_EXISTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#uri_override_enforce_mode CloudTasksQueue#uri_override_enforce_mode}

---

### CloudTasksQueueHttpTargetUriOverridePathOverride <a name="CloudTasksQueueHttpTargetUriOverridePathOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTargetUriOverridePathOverride;

CloudTasksQueueHttpTargetUriOverridePathOverride.builder()
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride.property.path">path</a></code> | <code>java.lang.String</code> | The URI path (e.g., /users/1234). Default is an empty string. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The URI path (e.g., /users/1234). Default is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#path CloudTasksQueue#path}

---

### CloudTasksQueueHttpTargetUriOverrideQueryOverride <a name="CloudTasksQueueHttpTargetUriOverrideQueryOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTargetUriOverrideQueryOverride;

CloudTasksQueueHttpTargetUriOverrideQueryOverride.builder()
//  .queryParams(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride.property.queryParams">queryParams</a></code> | <code>java.lang.String</code> | The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string. |

---

##### `queryParams`<sup>Optional</sup> <a name="queryParams" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride.property.queryParams"></a>

```java
public java.lang.String getQueryParams();
```

- *Type:* java.lang.String

The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#query_params CloudTasksQueue#query_params}

---

### CloudTasksQueueRateLimits <a name="CloudTasksQueueRateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueRateLimits;

CloudTasksQueueRateLimits.builder()
//  .maxConcurrentDispatches(java.lang.Number)
//  .maxDispatchesPerSecond(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxConcurrentDispatches">maxConcurrentDispatches</a></code> | <code>java.lang.Number</code> | The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxDispatchesPerSecond">maxDispatchesPerSecond</a></code> | <code>java.lang.Number</code> | The maximum rate at which tasks are dispatched from this queue. |

---

##### `maxConcurrentDispatches`<sup>Optional</sup> <a name="maxConcurrentDispatches" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxConcurrentDispatches"></a>

```java
public java.lang.Number getMaxConcurrentDispatches();
```

- *Type:* java.lang.Number

The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue.

After this threshold has been
reached, Cloud Tasks stops dispatching tasks until the number of
concurrent requests decreases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#max_concurrent_dispatches CloudTasksQueue#max_concurrent_dispatches}

---

##### `maxDispatchesPerSecond`<sup>Optional</sup> <a name="maxDispatchesPerSecond" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxDispatchesPerSecond"></a>

```java
public java.lang.Number getMaxDispatchesPerSecond();
```

- *Type:* java.lang.Number

The maximum rate at which tasks are dispatched from this queue.

If unspecified when the queue is created, Cloud Tasks will pick the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#max_dispatches_per_second CloudTasksQueue#max_dispatches_per_second}

---

### CloudTasksQueueRetryConfig <a name="CloudTasksQueueRetryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueRetryConfig;

CloudTasksQueueRetryConfig.builder()
//  .maxAttempts(java.lang.Number)
//  .maxBackoff(java.lang.String)
//  .maxDoublings(java.lang.Number)
//  .maxRetryDuration(java.lang.String)
//  .minBackoff(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxAttempts">maxAttempts</a></code> | <code>java.lang.Number</code> | Number of attempts per task. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxBackoff">maxBackoff</a></code> | <code>java.lang.String</code> | A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxDoublings">maxDoublings</a></code> | <code>java.lang.Number</code> | The time between retries will double maxDoublings times. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxRetryDuration">maxRetryDuration</a></code> | <code>java.lang.String</code> | If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.minBackoff">minBackoff</a></code> | <code>java.lang.String</code> | A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. |

---

##### `maxAttempts`<sup>Optional</sup> <a name="maxAttempts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxAttempts"></a>

```java
public java.lang.Number getMaxAttempts();
```

- *Type:* java.lang.Number

Number of attempts per task.

Cloud Tasks will attempt the task maxAttempts times (that is, if
the first attempt fails, then there will be maxAttempts - 1
retries). Must be >= -1.

If unspecified when the queue is created, Cloud Tasks will pick
the default.

-1 indicates unlimited attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#max_attempts CloudTasksQueue#max_attempts}

---

##### `maxBackoff`<sup>Optional</sup> <a name="maxBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxBackoff"></a>

```java
public java.lang.String getMaxBackoff();
```

- *Type:* java.lang.String

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#max_backoff CloudTasksQueue#max_backoff}

---

##### `maxDoublings`<sup>Optional</sup> <a name="maxDoublings" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxDoublings"></a>

```java
public java.lang.Number getMaxDoublings();
```

- *Type:* java.lang.Number

The time between retries will double maxDoublings times.

A task's retry interval starts at minBackoff, then doubles maxDoublings times,
then increases linearly, and finally retries retries at intervals of maxBackoff
up to maxAttempts times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#max_doublings CloudTasksQueue#max_doublings}

---

##### `maxRetryDuration`<sup>Optional</sup> <a name="maxRetryDuration" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxRetryDuration"></a>

```java
public java.lang.String getMaxRetryDuration();
```

- *Type:* java.lang.String

If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted.

Once maxRetryDuration time has passed and the task has
been attempted maxAttempts times, no further attempts will be
made and the task will be deleted.

If zero, then the task age is unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#max_retry_duration CloudTasksQueue#max_retry_duration}

---

##### `minBackoff`<sup>Optional</sup> <a name="minBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.minBackoff"></a>

```java
public java.lang.String getMinBackoff();
```

- *Type:* java.lang.String

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#min_backoff CloudTasksQueue#min_backoff}

---

### CloudTasksQueueStackdriverLoggingConfig <a name="CloudTasksQueueStackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueStackdriverLoggingConfig;

CloudTasksQueueStackdriverLoggingConfig.builder()
    .samplingRatio(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig.property.samplingRatio">samplingRatio</a></code> | <code>java.lang.Number</code> | Specifies the fraction of operations to write to Stackdriver Logging. |

---

##### `samplingRatio`<sup>Required</sup> <a name="samplingRatio" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig.property.samplingRatio"></a>

```java
public java.lang.Number getSamplingRatio();
```

- *Type:* java.lang.Number

Specifies the fraction of operations to write to Stackdriver Logging.

This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the
default and means that no operations are logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#sampling_ratio CloudTasksQueue#sampling_ratio}

---

### CloudTasksQueueTimeouts <a name="CloudTasksQueueTimeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueTimeouts;

CloudTasksQueueTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#create CloudTasksQueue#create}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#delete CloudTasksQueue#delete}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#update CloudTasksQueue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#create CloudTasksQueue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#delete CloudTasksQueue#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/cloud_tasks_queue#update CloudTasksQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudTasksQueueAppEngineRoutingOverrideOutputReference <a name="CloudTasksQueueAppEngineRoutingOverrideOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueAppEngineRoutingOverrideOutputReference;

new CloudTasksQueueAppEngineRoutingOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetInstance">resetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstance` <a name="resetInstance" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetInstance"></a>

```java
public void resetInstance()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetService"></a>

```java
public void resetService()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.internalValue"></a>

```java
public CloudTasksQueueAppEngineRoutingOverride getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

---


### CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference <a name="CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference;

new CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.internalValue"></a>

```java
public CloudTasksQueueHttpTargetHeaderOverridesHeader getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a>

---


### CloudTasksQueueHttpTargetHeaderOverridesList <a name="CloudTasksQueueHttpTargetHeaderOverridesList" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTargetHeaderOverridesList;

new CloudTasksQueueHttpTargetHeaderOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.get"></a>

```java
public CloudTasksQueueHttpTargetHeaderOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>>

---


### CloudTasksQueueHttpTargetHeaderOverridesOutputReference <a name="CloudTasksQueueHttpTargetHeaderOverridesOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference;

new CloudTasksQueueHttpTargetHeaderOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader">putHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader"></a>

```java
public void putHeader(CloudTasksQueueHttpTargetHeaderOverridesHeader value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference">CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.headerInput">headerInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.header"></a>

```java
public CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference getHeader();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference">CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.headerInput"></a>

```java
public CloudTasksQueueHttpTargetHeaderOverridesHeader getHeaderInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>

---


### CloudTasksQueueHttpTargetOauthTokenOutputReference <a name="CloudTasksQueueHttpTargetOauthTokenOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTargetOauthTokenOutputReference;

new CloudTasksQueueHttpTargetOauthTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resetScope"></a>

```java
public void resetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.internalValue"></a>

```java
public CloudTasksQueueHttpTargetOauthToken getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a>

---


### CloudTasksQueueHttpTargetOidcTokenOutputReference <a name="CloudTasksQueueHttpTargetOidcTokenOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTargetOidcTokenOutputReference;

new CloudTasksQueueHttpTargetOidcTokenOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resetAudience">resetAudience</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resetAudience"></a>

```java
public void resetAudience()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.audienceInput">audienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.audienceInput"></a>

```java
public java.lang.String getAudienceInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.internalValue"></a>

```java
public CloudTasksQueueHttpTargetOidcToken getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a>

---


### CloudTasksQueueHttpTargetOutputReference <a name="CloudTasksQueueHttpTargetOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTargetOutputReference;

new CloudTasksQueueHttpTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putHeaderOverrides">putHeaderOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOauthToken">putOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOidcToken">putOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride">putUriOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetHeaderOverrides">resetHeaderOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetOauthToken">resetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetOidcToken">resetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetUriOverride">resetUriOverride</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaderOverrides` <a name="putHeaderOverrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putHeaderOverrides"></a>

```java
public void putHeaderOverrides(IResolvable OR java.util.List<CloudTasksQueueHttpTargetHeaderOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putHeaderOverrides.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>>

---

##### `putOauthToken` <a name="putOauthToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOauthToken"></a>

```java
public void putOauthToken(CloudTasksQueueHttpTargetOauthToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOauthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a>

---

##### `putOidcToken` <a name="putOidcToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOidcToken"></a>

```java
public void putOidcToken(CloudTasksQueueHttpTargetOidcToken value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a>

---

##### `putUriOverride` <a name="putUriOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride"></a>

```java
public void putUriOverride(CloudTasksQueueHttpTargetUriOverride value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a>

---

##### `resetHeaderOverrides` <a name="resetHeaderOverrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetHeaderOverrides"></a>

```java
public void resetHeaderOverrides()
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetHttpMethod"></a>

```java
public void resetHttpMethod()
```

##### `resetOauthToken` <a name="resetOauthToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetOauthToken"></a>

```java
public void resetOauthToken()
```

##### `resetOidcToken` <a name="resetOidcToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetOidcToken"></a>

```java
public void resetOidcToken()
```

##### `resetUriOverride` <a name="resetUriOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetUriOverride"></a>

```java
public void resetUriOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.headerOverrides">headerOverrides</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList">CloudTasksQueueHttpTargetHeaderOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oauthToken">oauthToken</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference">CloudTasksQueueHttpTargetOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oidcToken">oidcToken</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference">CloudTasksQueueHttpTargetOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.uriOverride">uriOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference">CloudTasksQueueHttpTargetUriOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.headerOverridesInput">headerOverridesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oauthTokenInput">oauthTokenInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oidcTokenInput">oidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.uriOverrideInput">uriOverrideInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerOverrides`<sup>Required</sup> <a name="headerOverrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.headerOverrides"></a>

```java
public CloudTasksQueueHttpTargetHeaderOverridesList getHeaderOverrides();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList">CloudTasksQueueHttpTargetHeaderOverridesList</a>

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oauthToken"></a>

```java
public CloudTasksQueueHttpTargetOauthTokenOutputReference getOauthToken();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference">CloudTasksQueueHttpTargetOauthTokenOutputReference</a>

---

##### `oidcToken`<sup>Required</sup> <a name="oidcToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oidcToken"></a>

```java
public CloudTasksQueueHttpTargetOidcTokenOutputReference getOidcToken();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference">CloudTasksQueueHttpTargetOidcTokenOutputReference</a>

---

##### `uriOverride`<sup>Required</sup> <a name="uriOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.uriOverride"></a>

```java
public CloudTasksQueueHttpTargetUriOverrideOutputReference getUriOverride();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference">CloudTasksQueueHttpTargetUriOverrideOutputReference</a>

---

##### `headerOverridesInput`<sup>Optional</sup> <a name="headerOverridesInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.headerOverridesInput"></a>

```java
public java.lang.Object getHeaderOverridesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides">CloudTasksQueueHttpTargetHeaderOverrides</a>>

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `oauthTokenInput`<sup>Optional</sup> <a name="oauthTokenInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oauthTokenInput"></a>

```java
public CloudTasksQueueHttpTargetOauthToken getOauthTokenInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a>

---

##### `oidcTokenInput`<sup>Optional</sup> <a name="oidcTokenInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oidcTokenInput"></a>

```java
public CloudTasksQueueHttpTargetOidcToken getOidcTokenInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a>

---

##### `uriOverrideInput`<sup>Optional</sup> <a name="uriOverrideInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.uriOverrideInput"></a>

```java
public CloudTasksQueueHttpTargetUriOverride getUriOverrideInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a>

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.internalValue"></a>

```java
public CloudTasksQueueHttpTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

---


### CloudTasksQueueHttpTargetUriOverrideOutputReference <a name="CloudTasksQueueHttpTargetUriOverrideOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTargetUriOverrideOutputReference;

new CloudTasksQueueHttpTargetUriOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride">putPathOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride">putQueryOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetPathOverride">resetPathOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetQueryOverride">resetQueryOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetScheme">resetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetUriOverrideEnforceMode">resetUriOverrideEnforceMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPathOverride` <a name="putPathOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride"></a>

```java
public void putPathOverride(CloudTasksQueueHttpTargetUriOverridePathOverride value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a>

---

##### `putQueryOverride` <a name="putQueryOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride"></a>

```java
public void putQueryOverride(CloudTasksQueueHttpTargetUriOverrideQueryOverride value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

---

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetPathOverride` <a name="resetPathOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetPathOverride"></a>

```java
public void resetPathOverride()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetQueryOverride` <a name="resetQueryOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetQueryOverride"></a>

```java
public void resetQueryOverride()
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetScheme"></a>

```java
public void resetScheme()
```

##### `resetUriOverrideEnforceMode` <a name="resetUriOverrideEnforceMode" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetUriOverrideEnforceMode"></a>

```java
public void resetUriOverrideEnforceMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverride">pathOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference">CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverride">queryOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference">CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverrideInput">pathOverrideInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverrideInput">queryOverrideInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceModeInput">uriOverrideEnforceModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceMode">uriOverrideEnforceMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathOverride`<sup>Required</sup> <a name="pathOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverride"></a>

```java
public CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference getPathOverride();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference">CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference</a>

---

##### `queryOverride`<sup>Required</sup> <a name="queryOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverride"></a>

```java
public CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference getQueryOverride();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference">CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `pathOverrideInput`<sup>Optional</sup> <a name="pathOverrideInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverrideInput"></a>

```java
public CloudTasksQueueHttpTargetUriOverridePathOverride getPathOverrideInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `queryOverrideInput`<sup>Optional</sup> <a name="queryOverrideInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverrideInput"></a>

```java
public CloudTasksQueueHttpTargetUriOverrideQueryOverride getQueryOverrideInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `uriOverrideEnforceModeInput`<sup>Optional</sup> <a name="uriOverrideEnforceModeInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceModeInput"></a>

```java
public java.lang.String getUriOverrideEnforceModeInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `uriOverrideEnforceMode`<sup>Required</sup> <a name="uriOverrideEnforceMode" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceMode"></a>

```java
public java.lang.String getUriOverrideEnforceMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.internalValue"></a>

```java
public CloudTasksQueueHttpTargetUriOverride getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a>

---


### CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference <a name="CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference;

new CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.internalValue"></a>

```java
public CloudTasksQueueHttpTargetUriOverridePathOverride getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a>

---


### CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference <a name="CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference;

new CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resetQueryParams">resetQueryParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryParams` <a name="resetQueryParams" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resetQueryParams"></a>

```java
public void resetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParamsInput">queryParamsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParams">queryParams</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryParamsInput`<sup>Optional</sup> <a name="queryParamsInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParamsInput"></a>

```java
public java.lang.String getQueryParamsInput();
```

- *Type:* java.lang.String

---

##### `queryParams`<sup>Required</sup> <a name="queryParams" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParams"></a>

```java
public java.lang.String getQueryParams();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.internalValue"></a>

```java
public CloudTasksQueueHttpTargetUriOverrideQueryOverride getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

---


### CloudTasksQueueRateLimitsOutputReference <a name="CloudTasksQueueRateLimitsOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueRateLimitsOutputReference;

new CloudTasksQueueRateLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resetMaxConcurrentDispatches">resetMaxConcurrentDispatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resetMaxDispatchesPerSecond">resetMaxDispatchesPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxConcurrentDispatches` <a name="resetMaxConcurrentDispatches" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resetMaxConcurrentDispatches"></a>

```java
public void resetMaxConcurrentDispatches()
```

##### `resetMaxDispatchesPerSecond` <a name="resetMaxDispatchesPerSecond" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resetMaxDispatchesPerSecond"></a>

```java
public void resetMaxDispatchesPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxBurstSize">maxBurstSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatchesInput">maxConcurrentDispatchesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecondInput">maxDispatchesPerSecondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatches">maxConcurrentDispatches</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecond">maxDispatchesPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxBurstSize`<sup>Required</sup> <a name="maxBurstSize" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxBurstSize"></a>

```java
public java.lang.Number getMaxBurstSize();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentDispatchesInput`<sup>Optional</sup> <a name="maxConcurrentDispatchesInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatchesInput"></a>

```java
public java.lang.Number getMaxConcurrentDispatchesInput();
```

- *Type:* java.lang.Number

---

##### `maxDispatchesPerSecondInput`<sup>Optional</sup> <a name="maxDispatchesPerSecondInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecondInput"></a>

```java
public java.lang.Number getMaxDispatchesPerSecondInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentDispatches`<sup>Required</sup> <a name="maxConcurrentDispatches" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatches"></a>

```java
public java.lang.Number getMaxConcurrentDispatches();
```

- *Type:* java.lang.Number

---

##### `maxDispatchesPerSecond`<sup>Required</sup> <a name="maxDispatchesPerSecond" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecond"></a>

```java
public java.lang.Number getMaxDispatchesPerSecond();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.internalValue"></a>

```java
public CloudTasksQueueRateLimits getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

---


### CloudTasksQueueRetryConfigOutputReference <a name="CloudTasksQueueRetryConfigOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueRetryConfigOutputReference;

new CloudTasksQueueRetryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxAttempts">resetMaxAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxBackoff">resetMaxBackoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxDoublings">resetMaxDoublings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxRetryDuration">resetMaxRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMinBackoff">resetMinBackoff</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxAttempts` <a name="resetMaxAttempts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxAttempts"></a>

```java
public void resetMaxAttempts()
```

##### `resetMaxBackoff` <a name="resetMaxBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxBackoff"></a>

```java
public void resetMaxBackoff()
```

##### `resetMaxDoublings` <a name="resetMaxDoublings" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxDoublings"></a>

```java
public void resetMaxDoublings()
```

##### `resetMaxRetryDuration` <a name="resetMaxRetryDuration" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxRetryDuration"></a>

```java
public void resetMaxRetryDuration()
```

##### `resetMinBackoff` <a name="resetMinBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMinBackoff"></a>

```java
public void resetMinBackoff()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxBackoffInput">maxBackoffInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxDoublingsInput">maxDoublingsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxRetryDurationInput">maxRetryDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.minBackoffInput">minBackoffInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxBackoff">maxBackoff</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxDoublings">maxDoublings</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxRetryDuration">maxRetryDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.minBackoff">minBackoff</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxAttemptsInput"></a>

```java
public java.lang.Number getMaxAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `maxBackoffInput`<sup>Optional</sup> <a name="maxBackoffInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxBackoffInput"></a>

```java
public java.lang.String getMaxBackoffInput();
```

- *Type:* java.lang.String

---

##### `maxDoublingsInput`<sup>Optional</sup> <a name="maxDoublingsInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxDoublingsInput"></a>

```java
public java.lang.Number getMaxDoublingsInput();
```

- *Type:* java.lang.Number

---

##### `maxRetryDurationInput`<sup>Optional</sup> <a name="maxRetryDurationInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxRetryDurationInput"></a>

```java
public java.lang.String getMaxRetryDurationInput();
```

- *Type:* java.lang.String

---

##### `minBackoffInput`<sup>Optional</sup> <a name="minBackoffInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.minBackoffInput"></a>

```java
public java.lang.String getMinBackoffInput();
```

- *Type:* java.lang.String

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxAttempts"></a>

```java
public java.lang.Number getMaxAttempts();
```

- *Type:* java.lang.Number

---

##### `maxBackoff`<sup>Required</sup> <a name="maxBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxBackoff"></a>

```java
public java.lang.String getMaxBackoff();
```

- *Type:* java.lang.String

---

##### `maxDoublings`<sup>Required</sup> <a name="maxDoublings" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxDoublings"></a>

```java
public java.lang.Number getMaxDoublings();
```

- *Type:* java.lang.Number

---

##### `maxRetryDuration`<sup>Required</sup> <a name="maxRetryDuration" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxRetryDuration"></a>

```java
public java.lang.String getMaxRetryDuration();
```

- *Type:* java.lang.String

---

##### `minBackoff`<sup>Required</sup> <a name="minBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.minBackoff"></a>

```java
public java.lang.String getMinBackoff();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.internalValue"></a>

```java
public CloudTasksQueueRetryConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

---


### CloudTasksQueueStackdriverLoggingConfigOutputReference <a name="CloudTasksQueueStackdriverLoggingConfigOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueStackdriverLoggingConfigOutputReference;

new CloudTasksQueueStackdriverLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatioInput">samplingRatioInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatio">samplingRatio</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `samplingRatioInput`<sup>Optional</sup> <a name="samplingRatioInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatioInput"></a>

```java
public java.lang.Number getSamplingRatioInput();
```

- *Type:* java.lang.Number

---

##### `samplingRatio`<sup>Required</sup> <a name="samplingRatio" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatio"></a>

```java
public java.lang.Number getSamplingRatio();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.internalValue"></a>

```java
public CloudTasksQueueStackdriverLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

---


### CloudTasksQueueTimeoutsOutputReference <a name="CloudTasksQueueTimeoutsOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloud_tasks_queue.CloudTasksQueueTimeoutsOutputReference;

new CloudTasksQueueTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>

---



