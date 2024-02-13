# `bigqueryAnalyticsHubDataExchange` Submodule <a name="`bigqueryAnalyticsHubDataExchange` Submodule" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryAnalyticsHubDataExchange <a name="BigqueryAnalyticsHubDataExchange" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange google_bigquery_analytics_hub_data_exchange}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_data_exchange.BigqueryAnalyticsHubDataExchange;

BigqueryAnalyticsHubDataExchange.Builder.create(Construct scope, java.lang.String id)
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
    .dataExchangeId(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .description(java.lang.String)
//  .documentation(java.lang.String)
//  .icon(java.lang.String)
//  .id(java.lang.String)
//  .primaryContact(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BigqueryAnalyticsHubDataExchangeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.dataExchangeId">dataExchangeId</a></code> | <code>java.lang.String</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable display name of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The name of the location this data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.documentation">documentation</a></code> | <code>java.lang.String</code> | Documentation describing the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.icon">icon</a></code> | <code>java.lang.String</code> | Base64 encoded image representing the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#id BigqueryAnalyticsHubDataExchange#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.primaryContact">primaryContact</a></code> | <code>java.lang.String</code> | Email or URL of the primary point of contact of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#project BigqueryAnalyticsHubDataExchange#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.dataExchangeId"></a>

- *Type:* java.lang.String

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#data_exchange_id BigqueryAnalyticsHubDataExchange#data_exchange_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable display name of the data exchange.

The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#display_name BigqueryAnalyticsHubDataExchange#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The name of the location this data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#location BigqueryAnalyticsHubDataExchange#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#description BigqueryAnalyticsHubDataExchange#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.documentation"></a>

- *Type:* java.lang.String

Documentation describing the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#documentation BigqueryAnalyticsHubDataExchange#documentation}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.icon"></a>

- *Type:* java.lang.String

Base64 encoded image representing the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#icon BigqueryAnalyticsHubDataExchange#icon}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#id BigqueryAnalyticsHubDataExchange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primaryContact`<sup>Optional</sup> <a name="primaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.primaryContact"></a>

- *Type:* java.lang.String

Email or URL of the primary point of contact of the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#primary_contact BigqueryAnalyticsHubDataExchange#primary_contact}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#project BigqueryAnalyticsHubDataExchange#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#timeouts BigqueryAnalyticsHubDataExchange#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetDocumentation">resetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetIcon">resetIcon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetPrimaryContact">resetPrimaryContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.putTimeouts"></a>

```java
public void putTimeouts(BigqueryAnalyticsHubDataExchangeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDocumentation` <a name="resetDocumentation" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetDocumentation"></a>

```java
public void resetDocumentation()
```

##### `resetIcon` <a name="resetIcon" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetIcon"></a>

```java
public void resetIcon()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetId"></a>

```java
public void resetId()
```

##### `resetPrimaryContact` <a name="resetPrimaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetPrimaryContact"></a>

```java
public void resetPrimaryContact()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryAnalyticsHubDataExchange resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_data_exchange.BigqueryAnalyticsHubDataExchange;

BigqueryAnalyticsHubDataExchange.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_data_exchange.BigqueryAnalyticsHubDataExchange;

BigqueryAnalyticsHubDataExchange.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_data_exchange.BigqueryAnalyticsHubDataExchange;

BigqueryAnalyticsHubDataExchange.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_data_exchange.BigqueryAnalyticsHubDataExchange;

BigqueryAnalyticsHubDataExchange.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BigqueryAnalyticsHubDataExchange.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BigqueryAnalyticsHubDataExchange resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BigqueryAnalyticsHubDataExchange to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BigqueryAnalyticsHubDataExchange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryAnalyticsHubDataExchange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.listingCount">listingCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference">BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.dataExchangeIdInput">dataExchangeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.documentationInput">documentationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.iconInput">iconInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.primaryContactInput">primaryContactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.dataExchangeId">dataExchangeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.documentation">documentation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.icon">icon</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.primaryContact">primaryContact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `listingCount`<sup>Required</sup> <a name="listingCount" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.listingCount"></a>

```java
public java.lang.Number getListingCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.timeouts"></a>

```java
public BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference">BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference</a>

---

##### `dataExchangeIdInput`<sup>Optional</sup> <a name="dataExchangeIdInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.dataExchangeIdInput"></a>

```java
public java.lang.String getDataExchangeIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `documentationInput`<sup>Optional</sup> <a name="documentationInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.documentationInput"></a>

```java
public java.lang.String getDocumentationInput();
```

- *Type:* java.lang.String

---

##### `iconInput`<sup>Optional</sup> <a name="iconInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.iconInput"></a>

```java
public java.lang.String getIconInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `primaryContactInput`<sup>Optional</sup> <a name="primaryContactInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.primaryContactInput"></a>

```java
public java.lang.String getPrimaryContactInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a>

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.dataExchangeId"></a>

```java
public java.lang.String getDataExchangeId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.documentation"></a>

```java
public java.lang.String getDocumentation();
```

- *Type:* java.lang.String

---

##### `icon`<sup>Required</sup> <a name="icon" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.icon"></a>

```java
public java.lang.String getIcon();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `primaryContact`<sup>Required</sup> <a name="primaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.primaryContact"></a>

```java
public java.lang.String getPrimaryContact();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchange.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryAnalyticsHubDataExchangeConfig <a name="BigqueryAnalyticsHubDataExchangeConfig" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_data_exchange.BigqueryAnalyticsHubDataExchangeConfig;

BigqueryAnalyticsHubDataExchangeConfig.builder()
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
    .dataExchangeId(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .description(java.lang.String)
//  .documentation(java.lang.String)
//  .icon(java.lang.String)
//  .id(java.lang.String)
//  .primaryContact(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BigqueryAnalyticsHubDataExchangeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.dataExchangeId">dataExchangeId</a></code> | <code>java.lang.String</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable display name of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.location">location</a></code> | <code>java.lang.String</code> | The name of the location this data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.documentation">documentation</a></code> | <code>java.lang.String</code> | Documentation describing the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.icon">icon</a></code> | <code>java.lang.String</code> | Base64 encoded image representing the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#id BigqueryAnalyticsHubDataExchange#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.primaryContact">primaryContact</a></code> | <code>java.lang.String</code> | Email or URL of the primary point of contact of the data exchange. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#project BigqueryAnalyticsHubDataExchange#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.dataExchangeId"></a>

```java
public java.lang.String getDataExchangeId();
```

- *Type:* java.lang.String

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#data_exchange_id BigqueryAnalyticsHubDataExchange#data_exchange_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable display name of the data exchange.

The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and must not start or end with spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#display_name BigqueryAnalyticsHubDataExchange#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The name of the location this data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#location BigqueryAnalyticsHubDataExchange#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#description BigqueryAnalyticsHubDataExchange#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.documentation"></a>

```java
public java.lang.String getDocumentation();
```

- *Type:* java.lang.String

Documentation describing the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#documentation BigqueryAnalyticsHubDataExchange#documentation}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.icon"></a>

```java
public java.lang.String getIcon();
```

- *Type:* java.lang.String

Base64 encoded image representing the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#icon BigqueryAnalyticsHubDataExchange#icon}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#id BigqueryAnalyticsHubDataExchange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primaryContact`<sup>Optional</sup> <a name="primaryContact" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.primaryContact"></a>

```java
public java.lang.String getPrimaryContact();
```

- *Type:* java.lang.String

Email or URL of the primary point of contact of the data exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#primary_contact BigqueryAnalyticsHubDataExchange#primary_contact}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#project BigqueryAnalyticsHubDataExchange#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeConfig.property.timeouts"></a>

```java
public BigqueryAnalyticsHubDataExchangeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#timeouts BigqueryAnalyticsHubDataExchange#timeouts}

---

### BigqueryAnalyticsHubDataExchangeTimeouts <a name="BigqueryAnalyticsHubDataExchangeTimeouts" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_data_exchange.BigqueryAnalyticsHubDataExchangeTimeouts;

BigqueryAnalyticsHubDataExchangeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#create BigqueryAnalyticsHubDataExchange#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#delete BigqueryAnalyticsHubDataExchange#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#update BigqueryAnalyticsHubDataExchange#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#create BigqueryAnalyticsHubDataExchange#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#delete BigqueryAnalyticsHubDataExchange#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigquery_analytics_hub_data_exchange#update BigqueryAnalyticsHubDataExchange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference <a name="BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.bigquery_analytics_hub_data_exchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference;

new BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.bigqueryAnalyticsHubDataExchange.BigqueryAnalyticsHubDataExchangeTimeouts">BigqueryAnalyticsHubDataExchangeTimeouts</a>

---



