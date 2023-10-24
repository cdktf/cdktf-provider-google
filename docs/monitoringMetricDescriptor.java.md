# `google_monitoring_metric_descriptor`

Refer to the Terraform Registory for docs: [`google_monitoring_metric_descriptor`](https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor).

# `monitoringMetricDescriptor` Submodule <a name="`monitoringMetricDescriptor` Submodule" id="@cdktf/provider-google.monitoringMetricDescriptor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringMetricDescriptor <a name="MonitoringMetricDescriptor" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor google_monitoring_metric_descriptor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_metric_descriptor.MonitoringMetricDescriptor;

MonitoringMetricDescriptor.Builder.create(Construct scope, java.lang.String id)
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
    .description(java.lang.String)
    .displayName(java.lang.String)
    .metricKind(java.lang.String)
    .type(java.lang.String)
    .valueType(java.lang.String)
//  .id(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<MonitoringMetricDescriptorLabels>)
//  .launchStage(java.lang.String)
//  .metadata(MonitoringMetricDescriptorMetadata)
//  .project(java.lang.String)
//  .timeouts(MonitoringMetricDescriptorTimeouts)
//  .unit(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A detailed description of the metric, which can be used in documentation. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A concise name for the metric, which can be displayed in user interfaces. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.metricKind">metricKind</a></code> | <code>java.lang.String</code> | Whether the metric records instantaneous values, changes to a value, etc. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The metric type, including its DNS name prefix. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.valueType">valueType</a></code> | <code>java.lang.String</code> | Whether the measurement is an integer, a floating-point number, etc. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#id MonitoringMetricDescriptor#id}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.launchStage">launchStage</a></code> | <code>java.lang.String</code> | The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#project MonitoringMetricDescriptor#project}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.unit">unit</a></code> | <code>java.lang.String</code> | The units in which the metric value is reported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A detailed description of the metric, which can be used in documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#description MonitoringMetricDescriptor#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case without an ending period, for example "Request count".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#display_name MonitoringMetricDescriptor#display_name}

---

##### `metricKind`<sup>Required</sup> <a name="metricKind" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.metricKind"></a>

- *Type:* java.lang.String

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["METRIC_KIND_UNSPECIFIED", "GAUGE", "DELTA", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#metric_kind MonitoringMetricDescriptor#metric_kind}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The metric type, including its DNS name prefix.

The type is not URL-encoded. All service defined metrics must be prefixed with the service name, in the format of {service name}/{relative metric name}, such as cloudsql.googleapis.com/database/cpu/utilization. The relative metric name must have only upper and lower-case letters, digits, '/' and underscores '_' are allowed. Additionally, the maximum number of characters allowed for the relative_metric_name is 100. All user-defined metric types have the DNS name custom.googleapis.com, external.googleapis.com, or logging.googleapis.com/user/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#type MonitoringMetricDescriptor#type}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.valueType"></a>

- *Type:* java.lang.String

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#value_type MonitoringMetricDescriptor#value_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#id MonitoringMetricDescriptor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.labels"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#labels MonitoringMetricDescriptor#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.launchStage"></a>

- *Type:* java.lang.String

The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#launch_stage MonitoringMetricDescriptor#launch_stage}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#metadata MonitoringMetricDescriptor#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#project MonitoringMetricDescriptor#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#timeouts MonitoringMetricDescriptor#timeouts}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.unit"></a>

- *Type:* java.lang.String

The units in which the metric value is reported.

It is only applicable if the
valueType is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of
the stored metric values.

Different systems may scale the values to be more easily displayed (so a value of
0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as
3.5MBy). However, if the unit is KBy, then the value of the metric is always in
thousands of bytes, no matter how it may be displayed.

If you want a custom metric to record the exact number of CPU-seconds used by a job,
you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently
1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as
12005.

Alternatively, if you want a custom metric to record data in a more granular way, you
can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value
12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).
The supported units are a subset of The Unified Code for Units of Measure standard.
More info can be found in the API documentation
(https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#unit MonitoringMetricDescriptor#unit}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetLaunchStage">resetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putLabels` <a name="putLabels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putLabels"></a>

```java
public void putLabels(IResolvable OR java.util.List<MonitoringMetricDescriptorLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>>

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putMetadata"></a>

```java
public void putMetadata(MonitoringMetricDescriptorMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putTimeouts"></a>

```java
public void putTimeouts(MonitoringMetricDescriptorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLaunchStage` <a name="resetLaunchStage" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetLaunchStage"></a>

```java
public void resetLaunchStage()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetUnit"></a>

```java
public void resetUnit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitoringMetricDescriptor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_metric_descriptor.MonitoringMetricDescriptor;

MonitoringMetricDescriptor.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_metric_descriptor.MonitoringMetricDescriptor;

MonitoringMetricDescriptor.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_metric_descriptor.MonitoringMetricDescriptor;

MonitoringMetricDescriptor.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_metric_descriptor.MonitoringMetricDescriptor;

MonitoringMetricDescriptor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MonitoringMetricDescriptor.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MonitoringMetricDescriptor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MonitoringMetricDescriptor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MonitoringMetricDescriptor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringMetricDescriptor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList">MonitoringMetricDescriptorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference">MonitoringMetricDescriptorMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.monitoredResourceTypes">monitoredResourceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference">MonitoringMetricDescriptorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.labelsInput">labelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.launchStageInput">launchStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metricKindInput">metricKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.launchStage">launchStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metricKind">metricKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.labels"></a>

```java
public MonitoringMetricDescriptorLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList">MonitoringMetricDescriptorLabelsList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metadata"></a>

```java
public MonitoringMetricDescriptorMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference">MonitoringMetricDescriptorMetadataOutputReference</a>

---

##### `monitoredResourceTypes`<sup>Required</sup> <a name="monitoredResourceTypes" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.monitoredResourceTypes"></a>

```java
public java.util.List<java.lang.String> getMonitoredResourceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.timeouts"></a>

```java
public MonitoringMetricDescriptorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference">MonitoringMetricDescriptorTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.labelsInput"></a>

```java
public java.lang.Object getLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>>

---

##### `launchStageInput`<sup>Optional</sup> <a name="launchStageInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.launchStageInput"></a>

```java
public java.lang.String getLaunchStageInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metadataInput"></a>

```java
public MonitoringMetricDescriptorMetadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

---

##### `metricKindInput`<sup>Optional</sup> <a name="metricKindInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metricKindInput"></a>

```java
public java.lang.String getMetricKindInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `launchStage`<sup>Required</sup> <a name="launchStage" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.launchStage"></a>

```java
public java.lang.String getLaunchStage();
```

- *Type:* java.lang.String

---

##### `metricKind`<sup>Required</sup> <a name="metricKind" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metricKind"></a>

```java
public java.lang.String getMetricKind();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringMetricDescriptorConfig <a name="MonitoringMetricDescriptorConfig" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_metric_descriptor.MonitoringMetricDescriptorConfig;

MonitoringMetricDescriptorConfig.builder()
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
    .description(java.lang.String)
    .displayName(java.lang.String)
    .metricKind(java.lang.String)
    .type(java.lang.String)
    .valueType(java.lang.String)
//  .id(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<MonitoringMetricDescriptorLabels>)
//  .launchStage(java.lang.String)
//  .metadata(MonitoringMetricDescriptorMetadata)
//  .project(java.lang.String)
//  .timeouts(MonitoringMetricDescriptorTimeouts)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.description">description</a></code> | <code>java.lang.String</code> | A detailed description of the metric, which can be used in documentation. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A concise name for the metric, which can be displayed in user interfaces. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.metricKind">metricKind</a></code> | <code>java.lang.String</code> | Whether the metric records instantaneous values, changes to a value, etc. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.type">type</a></code> | <code>java.lang.String</code> | The metric type, including its DNS name prefix. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.valueType">valueType</a></code> | <code>java.lang.String</code> | Whether the measurement is an integer, a floating-point number, etc. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#id MonitoringMetricDescriptor#id}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.launchStage">launchStage</a></code> | <code>java.lang.String</code> | The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#project MonitoringMetricDescriptor#project}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.unit">unit</a></code> | <code>java.lang.String</code> | The units in which the metric value is reported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A detailed description of the metric, which can be used in documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#description MonitoringMetricDescriptor#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case without an ending period, for example "Request count".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#display_name MonitoringMetricDescriptor#display_name}

---

##### `metricKind`<sup>Required</sup> <a name="metricKind" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.metricKind"></a>

```java
public java.lang.String getMetricKind();
```

- *Type:* java.lang.String

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["METRIC_KIND_UNSPECIFIED", "GAUGE", "DELTA", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#metric_kind MonitoringMetricDescriptor#metric_kind}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The metric type, including its DNS name prefix.

The type is not URL-encoded. All service defined metrics must be prefixed with the service name, in the format of {service name}/{relative metric name}, such as cloudsql.googleapis.com/database/cpu/utilization. The relative metric name must have only upper and lower-case letters, digits, '/' and underscores '_' are allowed. Additionally, the maximum number of characters allowed for the relative_metric_name is 100. All user-defined metric types have the DNS name custom.googleapis.com, external.googleapis.com, or logging.googleapis.com/user/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#type MonitoringMetricDescriptor#type}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#value_type MonitoringMetricDescriptor#value_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#id MonitoringMetricDescriptor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.labels"></a>

```java
public java.lang.Object getLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#labels MonitoringMetricDescriptor#labels}

---

##### `launchStage`<sup>Optional</sup> <a name="launchStage" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.launchStage"></a>

```java
public java.lang.String getLaunchStage();
```

- *Type:* java.lang.String

The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#launch_stage MonitoringMetricDescriptor#launch_stage}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.metadata"></a>

```java
public MonitoringMetricDescriptorMetadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#metadata MonitoringMetricDescriptor#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#project MonitoringMetricDescriptor#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.timeouts"></a>

```java
public MonitoringMetricDescriptorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#timeouts MonitoringMetricDescriptor#timeouts}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The units in which the metric value is reported.

It is only applicable if the
valueType is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of
the stored metric values.

Different systems may scale the values to be more easily displayed (so a value of
0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as
3.5MBy). However, if the unit is KBy, then the value of the metric is always in
thousands of bytes, no matter how it may be displayed.

If you want a custom metric to record the exact number of CPU-seconds used by a job,
you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently
1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as
12005.

Alternatively, if you want a custom metric to record data in a more granular way, you
can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value
12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).
The supported units are a subset of The Unified Code for Units of Measure standard.
More info can be found in the API documentation
(https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#unit MonitoringMetricDescriptor#unit}

---

### MonitoringMetricDescriptorLabels <a name="MonitoringMetricDescriptorLabels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_metric_descriptor.MonitoringMetricDescriptorLabels;

MonitoringMetricDescriptorLabels.builder()
    .key(java.lang.String)
//  .description(java.lang.String)
//  .valueType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.key">key</a></code> | <code>java.lang.String</code> | The key for this label. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description for the label. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.valueType">valueType</a></code> | <code>java.lang.String</code> | The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["STRING", "BOOL", "INT64"]. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key for this label.

The key must not exceed 100 characters. The first character of the key must be an upper- or lower-case letter, the remaining characters must be letters, digits or underscores, and the key must match the regular expression [a-zA-Z][a-zA-Z0-9_]*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#key MonitoringMetricDescriptor#key}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description for the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#description MonitoringMetricDescriptor#description}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["STRING", "BOOL", "INT64"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#value_type MonitoringMetricDescriptor#value_type}

---

### MonitoringMetricDescriptorMetadata <a name="MonitoringMetricDescriptorMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_metric_descriptor.MonitoringMetricDescriptorMetadata;

MonitoringMetricDescriptorMetadata.builder()
//  .ingestDelay(java.lang.String)
//  .samplePeriod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.property.ingestDelay">ingestDelay</a></code> | <code>java.lang.String</code> | The delay of data points caused by ingestion. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.property.samplePeriod">samplePeriod</a></code> | <code>java.lang.String</code> | The sampling period of metric data points. |

---

##### `ingestDelay`<sup>Optional</sup> <a name="ingestDelay" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.property.ingestDelay"></a>

```java
public java.lang.String getIngestDelay();
```

- *Type:* java.lang.String

The delay of data points caused by ingestion.

Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#ingest_delay MonitoringMetricDescriptor#ingest_delay}

---

##### `samplePeriod`<sup>Optional</sup> <a name="samplePeriod" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.property.samplePeriod"></a>

```java
public java.lang.String getSamplePeriod();
```

- *Type:* java.lang.String

The sampling period of metric data points.

For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#sample_period MonitoringMetricDescriptor#sample_period}

---

### MonitoringMetricDescriptorTimeouts <a name="MonitoringMetricDescriptorTimeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_metric_descriptor.MonitoringMetricDescriptorTimeouts;

MonitoringMetricDescriptorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#create MonitoringMetricDescriptor#create}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#delete MonitoringMetricDescriptor#delete}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#update MonitoringMetricDescriptor#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#create MonitoringMetricDescriptor#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#delete MonitoringMetricDescriptor#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/monitoring_metric_descriptor#update MonitoringMetricDescriptor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringMetricDescriptorLabelsList <a name="MonitoringMetricDescriptorLabelsList" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_metric_descriptor.MonitoringMetricDescriptorLabelsList;

new MonitoringMetricDescriptorLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.get"></a>

```java
public MonitoringMetricDescriptorLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>>

---


### MonitoringMetricDescriptorLabelsOutputReference <a name="MonitoringMetricDescriptorLabelsOutputReference" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_metric_descriptor.MonitoringMetricDescriptorLabelsOutputReference;

new MonitoringMetricDescriptorLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetValueType` <a name="resetValueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resetValueType"></a>

```java
public void resetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels">MonitoringMetricDescriptorLabels</a>

---


### MonitoringMetricDescriptorMetadataOutputReference <a name="MonitoringMetricDescriptorMetadataOutputReference" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_metric_descriptor.MonitoringMetricDescriptorMetadataOutputReference;

new MonitoringMetricDescriptorMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resetIngestDelay">resetIngestDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resetSamplePeriod">resetSamplePeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIngestDelay` <a name="resetIngestDelay" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resetIngestDelay"></a>

```java
public void resetIngestDelay()
```

##### `resetSamplePeriod` <a name="resetSamplePeriod" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resetSamplePeriod"></a>

```java
public void resetSamplePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.ingestDelayInput">ingestDelayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.samplePeriodInput">samplePeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.ingestDelay">ingestDelay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.samplePeriod">samplePeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingestDelayInput`<sup>Optional</sup> <a name="ingestDelayInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.ingestDelayInput"></a>

```java
public java.lang.String getIngestDelayInput();
```

- *Type:* java.lang.String

---

##### `samplePeriodInput`<sup>Optional</sup> <a name="samplePeriodInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.samplePeriodInput"></a>

```java
public java.lang.String getSamplePeriodInput();
```

- *Type:* java.lang.String

---

##### `ingestDelay`<sup>Required</sup> <a name="ingestDelay" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.ingestDelay"></a>

```java
public java.lang.String getIngestDelay();
```

- *Type:* java.lang.String

---

##### `samplePeriod`<sup>Required</sup> <a name="samplePeriod" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.samplePeriod"></a>

```java
public java.lang.String getSamplePeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.internalValue"></a>

```java
public MonitoringMetricDescriptorMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

---


### MonitoringMetricDescriptorTimeoutsOutputReference <a name="MonitoringMetricDescriptorTimeoutsOutputReference" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.monitoring_metric_descriptor.MonitoringMetricDescriptorTimeoutsOutputReference;

new MonitoringMetricDescriptorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a>

---



