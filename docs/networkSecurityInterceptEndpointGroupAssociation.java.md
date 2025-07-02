# `networkSecurityInterceptEndpointGroupAssociation` Submodule <a name="`networkSecurityInterceptEndpointGroupAssociation` Submodule" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityInterceptEndpointGroupAssociation <a name="NetworkSecurityInterceptEndpointGroupAssociation" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association google_network_security_intercept_endpoint_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_intercept_endpoint_group_association.NetworkSecurityInterceptEndpointGroupAssociation;

NetworkSecurityInterceptEndpointGroupAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .interceptEndpointGroup(java.lang.String)
    .location(java.lang.String)
    .network(java.lang.String)
//  .id(java.lang.String)
//  .interceptEndpointGroupAssociationId(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkSecurityInterceptEndpointGroupAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.interceptEndpointGroup">interceptEndpointGroup</a></code> | <code>java.lang.String</code> | The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/interceptEndpointGroups/my-eg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The cloud location of the association, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#id NetworkSecurityInterceptEndpointGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.interceptEndpointGroupAssociationId">interceptEndpointGroupAssociationId</a></code> | <code>java.lang.String</code> | The ID to use for the new association, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#project NetworkSecurityInterceptEndpointGroupAssociation#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `interceptEndpointGroup`<sup>Required</sup> <a name="interceptEndpointGroup" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.interceptEndpointGroup"></a>

- *Type:* java.lang.String

The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/interceptEndpointGroups/my-eg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#intercept_endpoint_group NetworkSecurityInterceptEndpointGroupAssociation#intercept_endpoint_group}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The cloud location of the association, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#location NetworkSecurityInterceptEndpointGroupAssociation#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#network NetworkSecurityInterceptEndpointGroupAssociation#network}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#id NetworkSecurityInterceptEndpointGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interceptEndpointGroupAssociationId`<sup>Optional</sup> <a name="interceptEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.interceptEndpointGroupAssociationId"></a>

- *Type:* java.lang.String

The ID to use for the new association, which will become the final component of the endpoint group's resource name.

If not provided, the
server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#intercept_endpoint_group_association_id NetworkSecurityInterceptEndpointGroupAssociation#intercept_endpoint_group_association_id}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#labels NetworkSecurityInterceptEndpointGroupAssociation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#project NetworkSecurityInterceptEndpointGroupAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#timeouts NetworkSecurityInterceptEndpointGroupAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetInterceptEndpointGroupAssociationId">resetInterceptEndpointGroupAssociationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.putTimeouts"></a>

```java
public void putTimeouts(NetworkSecurityInterceptEndpointGroupAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetInterceptEndpointGroupAssociationId` <a name="resetInterceptEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetInterceptEndpointGroupAssociationId"></a>

```java
public void resetInterceptEndpointGroupAssociationId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityInterceptEndpointGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_intercept_endpoint_group_association.NetworkSecurityInterceptEndpointGroupAssociation;

NetworkSecurityInterceptEndpointGroupAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_intercept_endpoint_group_association.NetworkSecurityInterceptEndpointGroupAssociation;

NetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_intercept_endpoint_group_association.NetworkSecurityInterceptEndpointGroupAssociation;

NetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_intercept_endpoint_group_association.NetworkSecurityInterceptEndpointGroupAssociation;

NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkSecurityInterceptEndpointGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkSecurityInterceptEndpointGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkSecurityInterceptEndpointGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityInterceptEndpointGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList">NetworkSecurityInterceptEndpointGroupAssociationLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locationsDetails">locationsDetails</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList">NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference">NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationIdInput">interceptEndpointGroupAssociationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupInput">interceptEndpointGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroup">interceptEndpointGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationId">interceptEndpointGroupAssociationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locations"></a>

```java
public NetworkSecurityInterceptEndpointGroupAssociationLocationsList getLocations();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList">NetworkSecurityInterceptEndpointGroupAssociationLocationsList</a>

---

##### `locationsDetails`<sup>Required</sup> <a name="locationsDetails" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locationsDetails"></a>

```java
public NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList getLocationsDetails();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList">NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.timeouts"></a>

```java
public NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference">NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `interceptEndpointGroupAssociationIdInput`<sup>Optional</sup> <a name="interceptEndpointGroupAssociationIdInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationIdInput"></a>

```java
public java.lang.String getInterceptEndpointGroupAssociationIdInput();
```

- *Type:* java.lang.String

---

##### `interceptEndpointGroupInput`<sup>Optional</sup> <a name="interceptEndpointGroupInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupInput"></a>

```java
public java.lang.String getInterceptEndpointGroupInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interceptEndpointGroup`<sup>Required</sup> <a name="interceptEndpointGroup" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroup"></a>

```java
public java.lang.String getInterceptEndpointGroup();
```

- *Type:* java.lang.String

---

##### `interceptEndpointGroupAssociationId`<sup>Required</sup> <a name="interceptEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.interceptEndpointGroupAssociationId"></a>

```java
public java.lang.String getInterceptEndpointGroupAssociationId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityInterceptEndpointGroupAssociationConfig <a name="NetworkSecurityInterceptEndpointGroupAssociationConfig" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_intercept_endpoint_group_association.NetworkSecurityInterceptEndpointGroupAssociationConfig;

NetworkSecurityInterceptEndpointGroupAssociationConfig.builder()
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
    .interceptEndpointGroup(java.lang.String)
    .location(java.lang.String)
    .network(java.lang.String)
//  .id(java.lang.String)
//  .interceptEndpointGroupAssociationId(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkSecurityInterceptEndpointGroupAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroup">interceptEndpointGroup</a></code> | <code>java.lang.String</code> | The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/interceptEndpointGroups/my-eg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.location">location</a></code> | <code>java.lang.String</code> | The cloud location of the association, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.network">network</a></code> | <code>java.lang.String</code> | The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#id NetworkSecurityInterceptEndpointGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroupAssociationId">interceptEndpointGroupAssociationId</a></code> | <code>java.lang.String</code> | The ID to use for the new association, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#project NetworkSecurityInterceptEndpointGroupAssociation#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `interceptEndpointGroup`<sup>Required</sup> <a name="interceptEndpointGroup" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroup"></a>

```java
public java.lang.String getInterceptEndpointGroup();
```

- *Type:* java.lang.String

The endpoint group that this association is connected to, for example: 'projects/123456789/locations/global/interceptEndpointGroups/my-eg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#intercept_endpoint_group NetworkSecurityInterceptEndpointGroupAssociation#intercept_endpoint_group}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The cloud location of the association, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#location NetworkSecurityInterceptEndpointGroupAssociation#location}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The VPC network that is associated. for example: 'projects/123456789/global/networks/my-network'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#network NetworkSecurityInterceptEndpointGroupAssociation#network}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#id NetworkSecurityInterceptEndpointGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interceptEndpointGroupAssociationId`<sup>Optional</sup> <a name="interceptEndpointGroupAssociationId" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.interceptEndpointGroupAssociationId"></a>

```java
public java.lang.String getInterceptEndpointGroupAssociationId();
```

- *Type:* java.lang.String

The ID to use for the new association, which will become the final component of the endpoint group's resource name.

If not provided, the
server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#intercept_endpoint_group_association_id NetworkSecurityInterceptEndpointGroupAssociation#intercept_endpoint_group_association_id}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#labels NetworkSecurityInterceptEndpointGroupAssociation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#project NetworkSecurityInterceptEndpointGroupAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationConfig.property.timeouts"></a>

```java
public NetworkSecurityInterceptEndpointGroupAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#timeouts NetworkSecurityInterceptEndpointGroupAssociation#timeouts}

---

### NetworkSecurityInterceptEndpointGroupAssociationLocations <a name="NetworkSecurityInterceptEndpointGroupAssociationLocations" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_intercept_endpoint_group_association.NetworkSecurityInterceptEndpointGroupAssociationLocations;

NetworkSecurityInterceptEndpointGroupAssociationLocations.builder()
    .build();
```


### NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_intercept_endpoint_group_association.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails;

NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails.builder()
    .build();
```


### NetworkSecurityInterceptEndpointGroupAssociationTimeouts <a name="NetworkSecurityInterceptEndpointGroupAssociationTimeouts" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_intercept_endpoint_group_association.NetworkSecurityInterceptEndpointGroupAssociationTimeouts;

NetworkSecurityInterceptEndpointGroupAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#create NetworkSecurityInterceptEndpointGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#delete NetworkSecurityInterceptEndpointGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#update NetworkSecurityInterceptEndpointGroupAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#create NetworkSecurityInterceptEndpointGroupAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#delete NetworkSecurityInterceptEndpointGroupAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/network_security_intercept_endpoint_group_association#update NetworkSecurityInterceptEndpointGroupAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_intercept_endpoint_group_association.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList;

new NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.get"></a>

```java
public NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_intercept_endpoint_group_association.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference;

new NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails">NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetailsOutputReference.property.internalValue"></a>

```java
public NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails">NetworkSecurityInterceptEndpointGroupAssociationLocationsDetails</a>

---


### NetworkSecurityInterceptEndpointGroupAssociationLocationsList <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsList" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_intercept_endpoint_group_association.NetworkSecurityInterceptEndpointGroupAssociationLocationsList;

new NetworkSecurityInterceptEndpointGroupAssociationLocationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.get"></a>

```java
public NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference <a name="NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_intercept_endpoint_group_association.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference;

new NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations">NetworkSecurityInterceptEndpointGroupAssociationLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocationsOutputReference.property.internalValue"></a>

```java
public NetworkSecurityInterceptEndpointGroupAssociationLocations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationLocations">NetworkSecurityInterceptEndpointGroupAssociationLocations</a>

---


### NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference <a name="NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_intercept_endpoint_group_association.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference;

new NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkSecurityInterceptEndpointGroupAssociation.NetworkSecurityInterceptEndpointGroupAssociationTimeouts">NetworkSecurityInterceptEndpointGroupAssociationTimeouts</a>

---



