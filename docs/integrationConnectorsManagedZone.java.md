# `integrationConnectorsManagedZone` Submodule <a name="`integrationConnectorsManagedZone` Submodule" id="@cdktf/provider-google.integrationConnectorsManagedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationConnectorsManagedZone <a name="IntegrationConnectorsManagedZone" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone google_integration_connectors_managed_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integration_connectors_managed_zone.IntegrationConnectorsManagedZone;

IntegrationConnectorsManagedZone.Builder.create(Construct scope, java.lang.String id)
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
    .dns(java.lang.String)
    .name(java.lang.String)
    .targetProject(java.lang.String)
    .targetVpc(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(IntegrationConnectorsManagedZoneTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.dns">dns</a></code> | <code>java.lang.String</code> | DNS Name of the resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of Managed Zone needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.targetProject">targetProject</a></code> | <code>java.lang.String</code> | The name of the Target Project. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.targetVpc">targetVpc</a></code> | <code>java.lang.String</code> | The name of the Target Project VPC Network. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#id IntegrationConnectorsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#project IntegrationConnectorsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.dns"></a>

- *Type:* java.lang.String

DNS Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#dns IntegrationConnectorsManagedZone#dns}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of Managed Zone needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#name IntegrationConnectorsManagedZone#name}

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.targetProject"></a>

- *Type:* java.lang.String

The name of the Target Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#target_project IntegrationConnectorsManagedZone#target_project}

---

##### `targetVpc`<sup>Required</sup> <a name="targetVpc" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.targetVpc"></a>

- *Type:* java.lang.String

The name of the Target Project VPC Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#target_vpc IntegrationConnectorsManagedZone#target_vpc}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#description IntegrationConnectorsManagedZone#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#id IntegrationConnectorsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#labels IntegrationConnectorsManagedZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#project IntegrationConnectorsManagedZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#timeouts IntegrationConnectorsManagedZone#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.putTimeouts"></a>

```java
public void putTimeouts(IntegrationConnectorsManagedZoneTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationConnectorsManagedZone resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.integration_connectors_managed_zone.IntegrationConnectorsManagedZone;

IntegrationConnectorsManagedZone.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.integration_connectors_managed_zone.IntegrationConnectorsManagedZone;

IntegrationConnectorsManagedZone.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.integration_connectors_managed_zone.IntegrationConnectorsManagedZone;

IntegrationConnectorsManagedZone.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.integration_connectors_managed_zone.IntegrationConnectorsManagedZone;

IntegrationConnectorsManagedZone.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationConnectorsManagedZone.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IntegrationConnectorsManagedZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationConnectorsManagedZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationConnectorsManagedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationConnectorsManagedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference">IntegrationConnectorsManagedZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dnsInput">dnsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetProjectInput">targetProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetVpcInput">targetVpcInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dns">dns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetProject">targetProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetVpc">targetVpc</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.timeouts"></a>

```java
public IntegrationConnectorsManagedZoneTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference">IntegrationConnectorsManagedZoneTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dnsInput"></a>

```java
public java.lang.String getDnsInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `targetProjectInput`<sup>Optional</sup> <a name="targetProjectInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetProjectInput"></a>

```java
public java.lang.String getTargetProjectInput();
```

- *Type:* java.lang.String

---

##### `targetVpcInput`<sup>Optional</sup> <a name="targetVpcInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetVpcInput"></a>

```java
public java.lang.String getTargetVpcInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dns"></a>

```java
public java.lang.String getDns();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetProject"></a>

```java
public java.lang.String getTargetProject();
```

- *Type:* java.lang.String

---

##### `targetVpc`<sup>Required</sup> <a name="targetVpc" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetVpc"></a>

```java
public java.lang.String getTargetVpc();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationConnectorsManagedZoneConfig <a name="IntegrationConnectorsManagedZoneConfig" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integration_connectors_managed_zone.IntegrationConnectorsManagedZoneConfig;

IntegrationConnectorsManagedZoneConfig.builder()
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
    .dns(java.lang.String)
    .name(java.lang.String)
    .targetProject(java.lang.String)
    .targetVpc(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(IntegrationConnectorsManagedZoneTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.dns">dns</a></code> | <code>java.lang.String</code> | DNS Name of the resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of Managed Zone needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.targetProject">targetProject</a></code> | <code>java.lang.String</code> | The name of the Target Project. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.targetVpc">targetVpc</a></code> | <code>java.lang.String</code> | The name of the Target Project VPC Network. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#id IntegrationConnectorsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#project IntegrationConnectorsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.dns"></a>

```java
public java.lang.String getDns();
```

- *Type:* java.lang.String

DNS Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#dns IntegrationConnectorsManagedZone#dns}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of Managed Zone needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#name IntegrationConnectorsManagedZone#name}

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.targetProject"></a>

```java
public java.lang.String getTargetProject();
```

- *Type:* java.lang.String

The name of the Target Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#target_project IntegrationConnectorsManagedZone#target_project}

---

##### `targetVpc`<sup>Required</sup> <a name="targetVpc" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.targetVpc"></a>

```java
public java.lang.String getTargetVpc();
```

- *Type:* java.lang.String

The name of the Target Project VPC Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#target_vpc IntegrationConnectorsManagedZone#target_vpc}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#description IntegrationConnectorsManagedZone#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#id IntegrationConnectorsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#labels IntegrationConnectorsManagedZone#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#project IntegrationConnectorsManagedZone#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.timeouts"></a>

```java
public IntegrationConnectorsManagedZoneTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#timeouts IntegrationConnectorsManagedZone#timeouts}

---

### IntegrationConnectorsManagedZoneTimeouts <a name="IntegrationConnectorsManagedZoneTimeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integration_connectors_managed_zone.IntegrationConnectorsManagedZoneTimeouts;

IntegrationConnectorsManagedZoneTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#create IntegrationConnectorsManagedZone#create}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#delete IntegrationConnectorsManagedZone#delete}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#update IntegrationConnectorsManagedZone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#create IntegrationConnectorsManagedZone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#delete IntegrationConnectorsManagedZone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integration_connectors_managed_zone#update IntegrationConnectorsManagedZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationConnectorsManagedZoneTimeoutsOutputReference <a name="IntegrationConnectorsManagedZoneTimeoutsOutputReference" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.integration_connectors_managed_zone.IntegrationConnectorsManagedZoneTimeoutsOutputReference;

new IntegrationConnectorsManagedZoneTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a>

---



