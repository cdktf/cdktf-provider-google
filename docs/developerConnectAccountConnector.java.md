# `developerConnectAccountConnector` Submodule <a name="`developerConnectAccountConnector` Submodule" id="@cdktf/provider-google.developerConnectAccountConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeveloperConnectAccountConnector <a name="DeveloperConnectAccountConnector" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector google_developer_connect_account_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.developer_connect_account_connector.DeveloperConnectAccountConnector;

DeveloperConnectAccountConnector.Builder.create(Construct scope, java.lang.String id)
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
    .accountConnectorId(java.lang.String)
    .location(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .providerOauthConfig(DeveloperConnectAccountConnectorProviderOauthConfig)
//  .timeouts(DeveloperConnectAccountConnectorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.accountConnectorId">accountConnectorId</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Allows users to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#id DeveloperConnectAccountConnector#id}. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#project DeveloperConnectAccountConnector#project}. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.providerOauthConfig">providerOauthConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a></code> | provider_oauth_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountConnectorId`<sup>Required</sup> <a name="accountConnectorId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.accountConnectorId"></a>

- *Type:* java.lang.String

Required.

The ID to use for the AccountConnector, which will become the final
component of the AccountConnector's resource name. Its format should adhere
to https://google.aip.dev/122#resource-id-segments Names must be unique
per-project per-location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#account_connector_id DeveloperConnectAccountConnector#account_connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#location DeveloperConnectAccountConnector#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Allows users to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#annotations DeveloperConnectAccountConnector#annotations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#id DeveloperConnectAccountConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#labels DeveloperConnectAccountConnector#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#project DeveloperConnectAccountConnector#project}.

---

##### `providerOauthConfig`<sup>Optional</sup> <a name="providerOauthConfig" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.providerOauthConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

provider_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#provider_oauth_config DeveloperConnectAccountConnector#provider_oauth_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#timeouts DeveloperConnectAccountConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProviderOauthConfig">putProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProviderOauthConfig">resetProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderOauthConfig` <a name="putProviderOauthConfig" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProviderOauthConfig"></a>

```java
public void putProviderOauthConfig(DeveloperConnectAccountConnectorProviderOauthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putProviderOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putTimeouts"></a>

```java
public void putTimeouts(DeveloperConnectAccountConnectorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProject"></a>

```java
public void resetProject()
```

##### `resetProviderOauthConfig` <a name="resetProviderOauthConfig" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetProviderOauthConfig"></a>

```java
public void resetProviderOauthConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DeveloperConnectAccountConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.developer_connect_account_connector.DeveloperConnectAccountConnector;

DeveloperConnectAccountConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.developer_connect_account_connector.DeveloperConnectAccountConnector;

DeveloperConnectAccountConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.developer_connect_account_connector.DeveloperConnectAccountConnector;

DeveloperConnectAccountConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.developer_connect_account_connector.DeveloperConnectAccountConnector;

DeveloperConnectAccountConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DeveloperConnectAccountConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DeveloperConnectAccountConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DeveloperConnectAccountConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DeveloperConnectAccountConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DeveloperConnectAccountConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.oauthStartUri">oauthStartUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.providerOauthConfig">providerOauthConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference">DeveloperConnectAccountConnectorProviderOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference">DeveloperConnectAccountConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.accountConnectorIdInput">accountConnectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.providerOauthConfigInput">providerOauthConfigInput</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.accountConnectorId">accountConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oauthStartUri`<sup>Required</sup> <a name="oauthStartUri" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.oauthStartUri"></a>

```java
public java.lang.String getOauthStartUri();
```

- *Type:* java.lang.String

---

##### `providerOauthConfig`<sup>Required</sup> <a name="providerOauthConfig" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.providerOauthConfig"></a>

```java
public DeveloperConnectAccountConnectorProviderOauthConfigOutputReference getProviderOauthConfig();
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference">DeveloperConnectAccountConnectorProviderOauthConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.timeouts"></a>

```java
public DeveloperConnectAccountConnectorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference">DeveloperConnectAccountConnectorTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `accountConnectorIdInput`<sup>Optional</sup> <a name="accountConnectorIdInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.accountConnectorIdInput"></a>

```java
public java.lang.String getAccountConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `providerOauthConfigInput`<sup>Optional</sup> <a name="providerOauthConfigInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.providerOauthConfigInput"></a>

```java
public DeveloperConnectAccountConnectorProviderOauthConfig getProviderOauthConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>

---

##### `accountConnectorId`<sup>Required</sup> <a name="accountConnectorId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.accountConnectorId"></a>

```java
public java.lang.String getAccountConnectorId();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DeveloperConnectAccountConnectorConfig <a name="DeveloperConnectAccountConnectorConfig" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.developer_connect_account_connector.DeveloperConnectAccountConnectorConfig;

DeveloperConnectAccountConnectorConfig.builder()
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
    .accountConnectorId(java.lang.String)
    .location(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .providerOauthConfig(DeveloperConnectAccountConnectorProviderOauthConfig)
//  .timeouts(DeveloperConnectAccountConnectorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.accountConnectorId">accountConnectorId</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Allows users to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#id DeveloperConnectAccountConnector#id}. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#project DeveloperConnectAccountConnector#project}. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.providerOauthConfig">providerOauthConfig</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a></code> | provider_oauth_config block. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountConnectorId`<sup>Required</sup> <a name="accountConnectorId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.accountConnectorId"></a>

```java
public java.lang.String getAccountConnectorId();
```

- *Type:* java.lang.String

Required.

The ID to use for the AccountConnector, which will become the final
component of the AccountConnector's resource name. Its format should adhere
to https://google.aip.dev/122#resource-id-segments Names must be unique
per-project per-location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#account_connector_id DeveloperConnectAccountConnector#account_connector_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#location DeveloperConnectAccountConnector#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Allows users to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#annotations DeveloperConnectAccountConnector#annotations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#id DeveloperConnectAccountConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#labels DeveloperConnectAccountConnector#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#project DeveloperConnectAccountConnector#project}.

---

##### `providerOauthConfig`<sup>Optional</sup> <a name="providerOauthConfig" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.providerOauthConfig"></a>

```java
public DeveloperConnectAccountConnectorProviderOauthConfig getProviderOauthConfig();
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

provider_oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#provider_oauth_config DeveloperConnectAccountConnector#provider_oauth_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorConfig.property.timeouts"></a>

```java
public DeveloperConnectAccountConnectorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#timeouts DeveloperConnectAccountConnector#timeouts}

---

### DeveloperConnectAccountConnectorProviderOauthConfig <a name="DeveloperConnectAccountConnectorProviderOauthConfig" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.developer_connect_account_connector.DeveloperConnectAccountConnectorProviderOauthConfig;

DeveloperConnectAccountConnectorProviderOauthConfig.builder()
    .scopes(java.util.List<java.lang.String>)
//  .systemProviderId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.property.systemProviderId">systemProviderId</a></code> | <code>java.lang.String</code> | List of providers that are owned by Developer Connect. |

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Required.

User selected scopes to apply to the Oauth config
In the event of changing scopes, user records under AccountConnector will
be deleted and users will re-auth again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#scopes DeveloperConnectAccountConnector#scopes}

---

##### `systemProviderId`<sup>Optional</sup> <a name="systemProviderId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig.property.systemProviderId"></a>

```java
public java.lang.String getSystemProviderId();
```

- *Type:* java.lang.String

List of providers that are owned by Developer Connect.

Possible values:
GITHUB
GITLAB
GOOGLE
SENTRY
ROVO

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#system_provider_id DeveloperConnectAccountConnector#system_provider_id}

---

### DeveloperConnectAccountConnectorTimeouts <a name="DeveloperConnectAccountConnectorTimeouts" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.developer_connect_account_connector.DeveloperConnectAccountConnectorTimeouts;

DeveloperConnectAccountConnectorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#create DeveloperConnectAccountConnector#create}. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#delete DeveloperConnectAccountConnector#delete}. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#update DeveloperConnectAccountConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#create DeveloperConnectAccountConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#delete DeveloperConnectAccountConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/developer_connect_account_connector#update DeveloperConnectAccountConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeveloperConnectAccountConnectorProviderOauthConfigOutputReference <a name="DeveloperConnectAccountConnectorProviderOauthConfigOutputReference" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.developer_connect_account_connector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference;

new DeveloperConnectAccountConnectorProviderOauthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resetSystemProviderId">resetSystemProviderId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSystemProviderId` <a name="resetSystemProviderId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.resetSystemProviderId"></a>

```java
public void resetSystemProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderIdInput">systemProviderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderId">systemProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `systemProviderIdInput`<sup>Optional</sup> <a name="systemProviderIdInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderIdInput"></a>

```java
public java.lang.String getSystemProviderIdInput();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `systemProviderId`<sup>Required</sup> <a name="systemProviderId" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.systemProviderId"></a>

```java
public java.lang.String getSystemProviderId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfigOutputReference.property.internalValue"></a>

```java
public DeveloperConnectAccountConnectorProviderOauthConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorProviderOauthConfig">DeveloperConnectAccountConnectorProviderOauthConfig</a>

---


### DeveloperConnectAccountConnectorTimeoutsOutputReference <a name="DeveloperConnectAccountConnectorTimeoutsOutputReference" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.developer_connect_account_connector.DeveloperConnectAccountConnectorTimeoutsOutputReference;

new DeveloperConnectAccountConnectorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.developerConnectAccountConnector.DeveloperConnectAccountConnectorTimeouts">DeveloperConnectAccountConnectorTimeouts</a>

---



