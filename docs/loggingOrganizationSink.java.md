# `loggingOrganizationSink` Submodule <a name="`loggingOrganizationSink` Submodule" id="@cdktf/provider-google.loggingOrganizationSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingOrganizationSink <a name="LoggingOrganizationSink" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink google_logging_organization_sink}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_sink.LoggingOrganizationSink;

LoggingOrganizationSink.Builder.create(Construct scope, java.lang.String id)
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
    .destination(java.lang.String)
    .name(java.lang.String)
    .orgId(java.lang.String)
//  .bigqueryOptions(LoggingOrganizationSinkBigqueryOptions)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .exclusions(IResolvable)
//  .exclusions(java.util.List<LoggingOrganizationSinkExclusions>)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .includeChildren(java.lang.Boolean)
//  .includeChildren(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.destination">destination</a></code> | <code>java.lang.String</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | The numeric ID of the organization to be exported to the sink. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.bigqueryOptions">bigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.exclusions">exclusions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions">LoggingOrganizationSinkExclusions</a>></code> | exclusions block. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#id LoggingOrganizationSink#id}. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.includeChildren">includeChildren</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to include children organizations in the sink export. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.destination"></a>

- *Type:* java.lang.String

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#destination LoggingOrganizationSink#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#name LoggingOrganizationSink#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

The numeric ID of the organization to be exported to the sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#org_id LoggingOrganizationSink#org_id}

---

##### `bigqueryOptions`<sup>Optional</sup> <a name="bigqueryOptions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.bigqueryOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#bigquery_options LoggingOrganizationSink#bigquery_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#description LoggingOrganizationSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#disabled LoggingOrganizationSink#disabled}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.exclusions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions">LoggingOrganizationSinkExclusions</a>>

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#exclusions LoggingOrganizationSink#exclusions}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#filter LoggingOrganizationSink#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#id LoggingOrganizationSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeChildren`<sup>Optional</sup> <a name="includeChildren" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.Initializer.parameter.includeChildren"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to include children organizations in the sink export.

If true, logs associated with child projects are also exported; otherwise only logs relating to the provided organization are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#include_children LoggingOrganizationSink#include_children}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putBigqueryOptions">putBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putExclusions">putExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetBigqueryOptions">resetBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetIncludeChildren">resetIncludeChildren</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigqueryOptions` <a name="putBigqueryOptions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putBigqueryOptions"></a>

```java
public void putBigqueryOptions(LoggingOrganizationSinkBigqueryOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putBigqueryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a>

---

##### `putExclusions` <a name="putExclusions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putExclusions"></a>

```java
public void putExclusions(IResolvable OR java.util.List<LoggingOrganizationSinkExclusions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.putExclusions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions">LoggingOrganizationSinkExclusions</a>>

---

##### `resetBigqueryOptions` <a name="resetBigqueryOptions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetBigqueryOptions"></a>

```java
public void resetBigqueryOptions()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetExclusions"></a>

```java
public void resetExclusions()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeChildren` <a name="resetIncludeChildren" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.resetIncludeChildren"></a>

```java
public void resetIncludeChildren()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoggingOrganizationSink resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_sink.LoggingOrganizationSink;

LoggingOrganizationSink.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_sink.LoggingOrganizationSink;

LoggingOrganizationSink.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_sink.LoggingOrganizationSink;

LoggingOrganizationSink.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_sink.LoggingOrganizationSink;

LoggingOrganizationSink.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LoggingOrganizationSink.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LoggingOrganizationSink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LoggingOrganizationSink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LoggingOrganizationSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LoggingOrganizationSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.bigqueryOptions">bigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference">LoggingOrganizationSinkBigqueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.exclusions">exclusions</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList">LoggingOrganizationSinkExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.writerIdentity">writerIdentity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.bigqueryOptionsInput">bigqueryOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.exclusionsInput">exclusionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions">LoggingOrganizationSinkExclusions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.includeChildrenInput">includeChildrenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.includeChildren">includeChildren</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bigqueryOptions`<sup>Required</sup> <a name="bigqueryOptions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.bigqueryOptions"></a>

```java
public LoggingOrganizationSinkBigqueryOptionsOutputReference getBigqueryOptions();
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference">LoggingOrganizationSinkBigqueryOptionsOutputReference</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.exclusions"></a>

```java
public LoggingOrganizationSinkExclusionsList getExclusions();
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList">LoggingOrganizationSinkExclusionsList</a>

---

##### `writerIdentity`<sup>Required</sup> <a name="writerIdentity" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.writerIdentity"></a>

```java
public java.lang.String getWriterIdentity();
```

- *Type:* java.lang.String

---

##### `bigqueryOptionsInput`<sup>Optional</sup> <a name="bigqueryOptionsInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.bigqueryOptionsInput"></a>

```java
public LoggingOrganizationSinkBigqueryOptions getBigqueryOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.exclusionsInput"></a>

```java
public java.lang.Object getExclusionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions">LoggingOrganizationSinkExclusions</a>>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeChildrenInput`<sup>Optional</sup> <a name="includeChildrenInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.includeChildrenInput"></a>

```java
public java.lang.Object getIncludeChildrenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeChildren`<sup>Required</sup> <a name="includeChildren" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.includeChildren"></a>

```java
public java.lang.Object getIncludeChildren();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSink.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingOrganizationSinkBigqueryOptions <a name="LoggingOrganizationSinkBigqueryOptions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_sink.LoggingOrganizationSinkBigqueryOptions;

LoggingOrganizationSinkBigqueryOptions.builder()
    .usePartitionedTables(java.lang.Boolean)
    .usePartitionedTables(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions.property.usePartitionedTables">usePartitionedTables</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to use BigQuery's partition tables. |

---

##### `usePartitionedTables`<sup>Required</sup> <a name="usePartitionedTables" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions.property.usePartitionedTables"></a>

```java
public java.lang.Object getUsePartitionedTables();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#use_partitioned_tables LoggingOrganizationSink#use_partitioned_tables}

---

### LoggingOrganizationSinkConfig <a name="LoggingOrganizationSinkConfig" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_sink.LoggingOrganizationSinkConfig;

LoggingOrganizationSinkConfig.builder()
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
    .destination(java.lang.String)
    .name(java.lang.String)
    .orgId(java.lang.String)
//  .bigqueryOptions(LoggingOrganizationSinkBigqueryOptions)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .exclusions(IResolvable)
//  .exclusions(java.util.List<LoggingOrganizationSinkExclusions>)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .includeChildren(java.lang.Boolean)
//  .includeChildren(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.destination">destination</a></code> | <code>java.lang.String</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the logging sink. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | The numeric ID of the organization to be exported to the sink. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.bigqueryOptions">bigqueryOptions</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.exclusions">exclusions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions">LoggingOrganizationSinkExclusions</a>></code> | exclusions block. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#id LoggingOrganizationSink#id}. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.includeChildren">includeChildren</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to include children organizations in the sink export. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#destination LoggingOrganizationSink#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#name LoggingOrganizationSink#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

The numeric ID of the organization to be exported to the sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#org_id LoggingOrganizationSink#org_id}

---

##### `bigqueryOptions`<sup>Optional</sup> <a name="bigqueryOptions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.bigqueryOptions"></a>

```java
public LoggingOrganizationSinkBigqueryOptions getBigqueryOptions();
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#bigquery_options LoggingOrganizationSink#bigquery_options}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#description LoggingOrganizationSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#disabled LoggingOrganizationSink#disabled}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.exclusions"></a>

```java
public java.lang.Object getExclusions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions">LoggingOrganizationSinkExclusions</a>>

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#exclusions LoggingOrganizationSink#exclusions}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#filter LoggingOrganizationSink#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#id LoggingOrganizationSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeChildren`<sup>Optional</sup> <a name="includeChildren" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkConfig.property.includeChildren"></a>

```java
public java.lang.Object getIncludeChildren();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to include children organizations in the sink export.

If true, logs associated with child projects are also exported; otherwise only logs relating to the provided organization are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#include_children LoggingOrganizationSink#include_children}

---

### LoggingOrganizationSinkExclusions <a name="LoggingOrganizationSinkExclusions" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_sink.LoggingOrganizationSinkExclusions;

LoggingOrganizationSinkExclusions.builder()
    .filter(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.filter">filter</a></code> | <code>java.lang.String</code> | An advanced logs filter that matches the log entries to be excluded. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.name">name</a></code> | <code>java.lang.String</code> | A client-assigned identifier, such as "load-balancer-exclusion". |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.description">description</a></code> | <code>java.lang.String</code> | A description of this exclusion. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to True, then this exclusion is disabled and it does not exclude any log entries. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

An advanced logs filter that matches the log entries to be excluded.

By using the sample function, you can exclude less than 100% of the matching log entries

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#filter LoggingOrganizationSink#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A client-assigned identifier, such as "load-balancer-exclusion".

Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#name LoggingOrganizationSink#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of this exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#description LoggingOrganizationSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to True, then this exclusion is disabled and it does not exclude any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/logging_organization_sink#disabled LoggingOrganizationSink#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingOrganizationSinkBigqueryOptionsOutputReference <a name="LoggingOrganizationSinkBigqueryOptionsOutputReference" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_sink.LoggingOrganizationSinkBigqueryOptionsOutputReference;

new LoggingOrganizationSinkBigqueryOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput">usePartitionedTablesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTables">usePartitionedTables</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `usePartitionedTablesInput`<sup>Optional</sup> <a name="usePartitionedTablesInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput"></a>

```java
public java.lang.Object getUsePartitionedTablesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `usePartitionedTables`<sup>Required</sup> <a name="usePartitionedTables" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTables"></a>

```java
public java.lang.Object getUsePartitionedTables();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptionsOutputReference.property.internalValue"></a>

```java
public LoggingOrganizationSinkBigqueryOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkBigqueryOptions">LoggingOrganizationSinkBigqueryOptions</a>

---


### LoggingOrganizationSinkExclusionsList <a name="LoggingOrganizationSinkExclusionsList" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_sink.LoggingOrganizationSinkExclusionsList;

new LoggingOrganizationSinkExclusionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.get"></a>

```java
public LoggingOrganizationSinkExclusionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions">LoggingOrganizationSinkExclusions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions">LoggingOrganizationSinkExclusions</a>>

---


### LoggingOrganizationSinkExclusionsOutputReference <a name="LoggingOrganizationSinkExclusionsOutputReference" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.logging_organization_sink.LoggingOrganizationSinkExclusionsOutputReference;

new LoggingOrganizationSinkExclusionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions">LoggingOrganizationSinkExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.loggingOrganizationSink.LoggingOrganizationSinkExclusions">LoggingOrganizationSinkExclusions</a>

---



