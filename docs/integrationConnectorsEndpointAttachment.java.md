# `integrationConnectorsEndpointAttachment` Submodule <a name="`integrationConnectorsEndpointAttachment` Submodule" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationConnectorsEndpointAttachment <a name="IntegrationConnectorsEndpointAttachment" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment google_integration_connectors_endpoint_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integration_connectors_endpoint_attachment.IntegrationConnectorsEndpointAttachment;

IntegrationConnectorsEndpointAttachment.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .serviceAttachment(java.lang.String)
//  .description(java.lang.String)
//  .endpointGlobalAccess(java.lang.Boolean)
//  .endpointGlobalAccess(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(IntegrationConnectorsEndpointAttachmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location in which Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | The path of the service attachment. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.endpointGlobalAccess">endpointGlobalAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable global access for endpoint attachment. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#id IntegrationConnectorsEndpointAttachment#id}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#project IntegrationConnectorsEndpointAttachment#project}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location in which Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#location IntegrationConnectorsEndpointAttachment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#name IntegrationConnectorsEndpointAttachment#name}

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.serviceAttachment"></a>

- *Type:* java.lang.String

The path of the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#service_attachment IntegrationConnectorsEndpointAttachment#service_attachment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#description IntegrationConnectorsEndpointAttachment#description}

---

##### `endpointGlobalAccess`<sup>Optional</sup> <a name="endpointGlobalAccess" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.endpointGlobalAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable global access for endpoint attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#endpoint_global_access IntegrationConnectorsEndpointAttachment#endpoint_global_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#id IntegrationConnectorsEndpointAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#labels IntegrationConnectorsEndpointAttachment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#project IntegrationConnectorsEndpointAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#timeouts IntegrationConnectorsEndpointAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetEndpointGlobalAccess">resetEndpointGlobalAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.putTimeouts"></a>

```java
public void putTimeouts(IntegrationConnectorsEndpointAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEndpointGlobalAccess` <a name="resetEndpointGlobalAccess" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetEndpointGlobalAccess"></a>

```java
public void resetEndpointGlobalAccess()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationConnectorsEndpointAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.integration_connectors_endpoint_attachment.IntegrationConnectorsEndpointAttachment;

IntegrationConnectorsEndpointAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.integration_connectors_endpoint_attachment.IntegrationConnectorsEndpointAttachment;

IntegrationConnectorsEndpointAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.integration_connectors_endpoint_attachment.IntegrationConnectorsEndpointAttachment;

IntegrationConnectorsEndpointAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.integration_connectors_endpoint_attachment.IntegrationConnectorsEndpointAttachment;

IntegrationConnectorsEndpointAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationConnectorsEndpointAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationConnectorsEndpointAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationConnectorsEndpointAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationConnectorsEndpointAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationConnectorsEndpointAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointIp">endpointIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference">IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointGlobalAccessInput">endpointGlobalAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.serviceAttachmentInput">serviceAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointGlobalAccess">endpointGlobalAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `endpointIp`<sup>Required</sup> <a name="endpointIp" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointIp"></a>

```java
public java.lang.String getEndpointIp();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.timeouts"></a>

```java
public IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference">IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `endpointGlobalAccessInput`<sup>Optional</sup> <a name="endpointGlobalAccessInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointGlobalAccessInput"></a>

```java
public java.lang.Object getEndpointGlobalAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceAttachmentInput`<sup>Optional</sup> <a name="serviceAttachmentInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.serviceAttachmentInput"></a>

```java
public java.lang.String getServiceAttachmentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endpointGlobalAccess`<sup>Required</sup> <a name="endpointGlobalAccess" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.endpointGlobalAccess"></a>

```java
public java.lang.Object getEndpointGlobalAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationConnectorsEndpointAttachmentConfig <a name="IntegrationConnectorsEndpointAttachmentConfig" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integration_connectors_endpoint_attachment.IntegrationConnectorsEndpointAttachmentConfig;

IntegrationConnectorsEndpointAttachmentConfig.builder()
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
    .name(java.lang.String)
    .serviceAttachment(java.lang.String)
//  .description(java.lang.String)
//  .endpointGlobalAccess(java.lang.Boolean)
//  .endpointGlobalAccess(IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(IntegrationConnectorsEndpointAttachmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location in which Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of Endpoint Attachment needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | The path of the service attachment. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.endpointGlobalAccess">endpointGlobalAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable global access for endpoint attachment. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#id IntegrationConnectorsEndpointAttachment#id}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#project IntegrationConnectorsEndpointAttachment#project}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location in which Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#location IntegrationConnectorsEndpointAttachment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of Endpoint Attachment needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#name IntegrationConnectorsEndpointAttachment#name}

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

The path of the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#service_attachment IntegrationConnectorsEndpointAttachment#service_attachment}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#description IntegrationConnectorsEndpointAttachment#description}

---

##### `endpointGlobalAccess`<sup>Optional</sup> <a name="endpointGlobalAccess" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.endpointGlobalAccess"></a>

```java
public java.lang.Object getEndpointGlobalAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable global access for endpoint attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#endpoint_global_access IntegrationConnectorsEndpointAttachment#endpoint_global_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#id IntegrationConnectorsEndpointAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#labels IntegrationConnectorsEndpointAttachment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#project IntegrationConnectorsEndpointAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentConfig.property.timeouts"></a>

```java
public IntegrationConnectorsEndpointAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#timeouts IntegrationConnectorsEndpointAttachment#timeouts}

---

### IntegrationConnectorsEndpointAttachmentTimeouts <a name="IntegrationConnectorsEndpointAttachmentTimeouts" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integration_connectors_endpoint_attachment.IntegrationConnectorsEndpointAttachmentTimeouts;

IntegrationConnectorsEndpointAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#create IntegrationConnectorsEndpointAttachment#create}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#delete IntegrationConnectorsEndpointAttachment#delete}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#update IntegrationConnectorsEndpointAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#create IntegrationConnectorsEndpointAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#delete IntegrationConnectorsEndpointAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/integration_connectors_endpoint_attachment#update IntegrationConnectorsEndpointAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference <a name="IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integration_connectors_endpoint_attachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference;

new IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationConnectorsEndpointAttachment.IntegrationConnectorsEndpointAttachmentTimeouts">IntegrationConnectorsEndpointAttachmentTimeouts</a>

---



