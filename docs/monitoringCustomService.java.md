# `monitoringCustomService` Submodule <a name="`monitoringCustomService` Submodule" id="@cdktf/provider-google.monitoringCustomService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringCustomService <a name="MonitoringCustomService" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service google_monitoring_custom_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_custom_service.MonitoringCustomService;

MonitoringCustomService.Builder.create(Construct scope, java.lang.String id)
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
//  .project(java.lang.String)
//  .serviceId(java.lang.String)
//  .telemetry(MonitoringCustomServiceTelemetry)
//  .timeouts(MonitoringCustomServiceTimeouts)
//  .userLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Name used for UI elements listing this Service. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#id MonitoringCustomService#id}. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#project MonitoringCustomService#project}. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.serviceId">serviceId</a></code> | <code>java.lang.String</code> | An optional service ID to use. If not given, the server will generate a service ID. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.telemetry">telemetry</a></code> | <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetry">MonitoringCustomServiceTelemetry</a></code> | telemetry block. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts">MonitoringCustomServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels which have been used to annotate the service. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Name used for UI elements listing this Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#display_name MonitoringCustomService#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#id MonitoringCustomService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#project MonitoringCustomService#project}.

---

##### `serviceId`<sup>Optional</sup> <a name="serviceId" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.serviceId"></a>

- *Type:* java.lang.String

An optional service ID to use. If not given, the server will generate a service ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#service_id MonitoringCustomService#service_id}

---

##### `telemetry`<sup>Optional</sup> <a name="telemetry" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.telemetry"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetry">MonitoringCustomServiceTelemetry</a>

telemetry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#telemetry MonitoringCustomService#telemetry}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts">MonitoringCustomServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#timeouts MonitoringCustomService#timeouts}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.Initializer.parameter.userLabels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels which have been used to annotate the service.

Label keys must start
with a letter. Label keys and values may contain lowercase letters,
numbers, underscores, and dashes. Label keys and values have a maximum
length of 63 characters, and must be less than 128 bytes in size. Up to 64
label entries may be stored. For labels which do not have a semantic value,
the empty string may be supplied for the label value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#user_labels MonitoringCustomService#user_labels}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.putTelemetry">putTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.resetServiceId">resetServiceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.resetTelemetry">resetTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.resetUserLabels">resetUserLabels</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTelemetry` <a name="putTelemetry" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.putTelemetry"></a>

```java
public void putTelemetry(MonitoringCustomServiceTelemetry value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.putTelemetry.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetry">MonitoringCustomServiceTelemetry</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.putTimeouts"></a>

```java
public void putTimeouts(MonitoringCustomServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts">MonitoringCustomServiceTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.resetProject"></a>

```java
public void resetProject()
```

##### `resetServiceId` <a name="resetServiceId" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.resetServiceId"></a>

```java
public void resetServiceId()
```

##### `resetTelemetry` <a name="resetTelemetry" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.resetTelemetry"></a>

```java
public void resetTelemetry()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserLabels` <a name="resetUserLabels" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.resetUserLabels"></a>

```java
public void resetUserLabels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitoringCustomService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_custom_service.MonitoringCustomService;

MonitoringCustomService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_custom_service.MonitoringCustomService;

MonitoringCustomService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_custom_service.MonitoringCustomService;

MonitoringCustomService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_custom_service.MonitoringCustomService;

MonitoringCustomService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MonitoringCustomService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MonitoringCustomService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MonitoringCustomService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MonitoringCustomService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringCustomService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.telemetry">telemetry</a></code> | <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference">MonitoringCustomServiceTelemetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference">MonitoringCustomServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.telemetryInput">telemetryInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetry">MonitoringCustomServiceTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts">MonitoringCustomServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.userLabelsInput">userLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `telemetry`<sup>Required</sup> <a name="telemetry" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.telemetry"></a>

```java
public MonitoringCustomServiceTelemetryOutputReference getTelemetry();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference">MonitoringCustomServiceTelemetryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.timeouts"></a>

```java
public MonitoringCustomServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference">MonitoringCustomServiceTimeoutsOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `telemetryInput`<sup>Optional</sup> <a name="telemetryInput" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.telemetryInput"></a>

```java
public MonitoringCustomServiceTelemetry getTelemetryInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetry">MonitoringCustomServiceTelemetry</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts">MonitoringCustomServiceTimeouts</a>

---

##### `userLabelsInput`<sup>Optional</sup> <a name="userLabelsInput" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.userLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `userLabels`<sup>Required</sup> <a name="userLabels" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringCustomServiceConfig <a name="MonitoringCustomServiceConfig" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_custom_service.MonitoringCustomServiceConfig;

MonitoringCustomServiceConfig.builder()
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
//  .project(java.lang.String)
//  .serviceId(java.lang.String)
//  .telemetry(MonitoringCustomServiceTelemetry)
//  .timeouts(MonitoringCustomServiceTimeouts)
//  .userLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Name used for UI elements listing this Service. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#id MonitoringCustomService#id}. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#project MonitoringCustomService#project}. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | An optional service ID to use. If not given, the server will generate a service ID. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.telemetry">telemetry</a></code> | <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetry">MonitoringCustomServiceTelemetry</a></code> | telemetry block. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts">MonitoringCustomServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.userLabels">userLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels which have been used to annotate the service. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Name used for UI elements listing this Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#display_name MonitoringCustomService#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#id MonitoringCustomService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#project MonitoringCustomService#project}.

---

##### `serviceId`<sup>Optional</sup> <a name="serviceId" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

An optional service ID to use. If not given, the server will generate a service ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#service_id MonitoringCustomService#service_id}

---

##### `telemetry`<sup>Optional</sup> <a name="telemetry" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.telemetry"></a>

```java
public MonitoringCustomServiceTelemetry getTelemetry();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetry">MonitoringCustomServiceTelemetry</a>

telemetry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#telemetry MonitoringCustomService#telemetry}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.timeouts"></a>

```java
public MonitoringCustomServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts">MonitoringCustomServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#timeouts MonitoringCustomService#timeouts}

---

##### `userLabels`<sup>Optional</sup> <a name="userLabels" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceConfig.property.userLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels which have been used to annotate the service.

Label keys must start
with a letter. Label keys and values may contain lowercase letters,
numbers, underscores, and dashes. Label keys and values have a maximum
length of 63 characters, and must be less than 128 bytes in size. Up to 64
label entries may be stored. For labels which do not have a semantic value,
the empty string may be supplied for the label value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#user_labels MonitoringCustomService#user_labels}

---

### MonitoringCustomServiceTelemetry <a name="MonitoringCustomServiceTelemetry" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_custom_service.MonitoringCustomServiceTelemetry;

MonitoringCustomServiceTelemetry.builder()
//  .resourceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetry.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | The full name of the resource that defines this service. Formatted as described in https://cloud.google.com/apis/design/resource_names. |

---

##### `resourceName`<sup>Optional</sup> <a name="resourceName" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetry.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

The full name of the resource that defines this service. Formatted as described in https://cloud.google.com/apis/design/resource_names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#resource_name MonitoringCustomService#resource_name}

---

### MonitoringCustomServiceTimeouts <a name="MonitoringCustomServiceTimeouts" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_custom_service.MonitoringCustomServiceTimeouts;

MonitoringCustomServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#create MonitoringCustomService#create}. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#delete MonitoringCustomService#delete}. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#update MonitoringCustomService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#create MonitoringCustomService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#delete MonitoringCustomService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/monitoring_custom_service#update MonitoringCustomService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringCustomServiceTelemetryOutputReference <a name="MonitoringCustomServiceTelemetryOutputReference" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_custom_service.MonitoringCustomServiceTelemetryOutputReference;

new MonitoringCustomServiceTelemetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.resetResourceName">resetResourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceName` <a name="resetResourceName" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.resetResourceName"></a>

```java
public void resetResourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.property.resourceNameInput">resourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetry">MonitoringCustomServiceTelemetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.property.resourceNameInput"></a>

```java
public java.lang.String getResourceNameInput();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetryOutputReference.property.internalValue"></a>

```java
public MonitoringCustomServiceTelemetry getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTelemetry">MonitoringCustomServiceTelemetry</a>

---


### MonitoringCustomServiceTimeoutsOutputReference <a name="MonitoringCustomServiceTimeoutsOutputReference" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_custom_service.MonitoringCustomServiceTimeoutsOutputReference;

new MonitoringCustomServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts">MonitoringCustomServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringCustomService.MonitoringCustomServiceTimeouts">MonitoringCustomServiceTimeouts</a>

---



