# `apigeeInstance` Submodule <a name="`apigeeInstance` Submodule" id="@cdktf/provider-google.apigeeInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeInstance <a name="ApigeeInstance" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance google_apigee_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_instance.ApigeeInstance;

ApigeeInstance.Builder.create(Construct scope, java.lang.String id)
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
    .orgId(java.lang.String)
//  .consumerAcceptList(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .diskEncryptionKeyName(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .ipRange(java.lang.String)
//  .peeringCidrRange(java.lang.String)
//  .timeouts(ApigeeInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Required. Compute Engine location where the instance resides. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Resource ID of the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.consumerAcceptList">consumerAcceptList</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.diskEncryptionKeyName">diskEncryptionKeyName</a></code> | <code>java.lang.String</code> | Customer Managed Encryption Key (CMEK) used for disk and volume encryption. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#id ApigeeInstance#id}. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.ipRange">ipRange</a></code> | <code>java.lang.String</code> | IP range represents the customer-provided CIDR block of length 22 that will be used for the Apigee instance creation. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.peeringCidrRange">peeringCidrRange</a></code> | <code>java.lang.String</code> | The size of the CIDR block range that will be reserved by the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Required. Compute Engine location where the instance resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#location ApigeeInstance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Resource ID of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#name ApigeeInstance#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#org_id ApigeeInstance#org_id}

---

##### `consumerAcceptList`<sup>Optional</sup> <a name="consumerAcceptList" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.consumerAcceptList"></a>

- *Type:* java.util.List<java.lang.String>

Optional.

Customer accept list represents the list of projects (id/number) on customer
side that can privately connect to the service attachment. It is an optional field
which the customers can provide during the instance creation. By default, the customer
project associated with the Apigee organization will be included to the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#consumer_accept_list ApigeeInstance#consumer_accept_list}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#description ApigeeInstance#description}

---

##### `diskEncryptionKeyName`<sup>Optional</sup> <a name="diskEncryptionKeyName" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.diskEncryptionKeyName"></a>

- *Type:* java.lang.String

Customer Managed Encryption Key (CMEK) used for disk and volume encryption.

Required for Apigee paid subscriptions only.
Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#disk_encryption_key_name ApigeeInstance#disk_encryption_key_name}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#display_name ApigeeInstance#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#id ApigeeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipRange`<sup>Optional</sup> <a name="ipRange" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.ipRange"></a>

- *Type:* java.lang.String

IP range represents the customer-provided CIDR block of length 22 that will be used for the Apigee instance creation.

This optional range, if provided, should be freely
available as part of larger named range the customer has allocated to the Service
Networking peering. If this is not provided, Apigee will automatically request for any
available /22 CIDR block from Service Networking. The customer should use this CIDR block
for configuring their firewall needs to allow traffic from Apigee.
Input format: "a.b.c.d/22"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#ip_range ApigeeInstance#ip_range}

---

##### `peeringCidrRange`<sup>Optional</sup> <a name="peeringCidrRange" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.peeringCidrRange"></a>

- *Type:* java.lang.String

The size of the CIDR block range that will be reserved by the instance.

For valid values,
see [CidrRange](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances#CidrRange) on the documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#peering_cidr_range ApigeeInstance#peering_cidr_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#timeouts ApigeeInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetConsumerAcceptList">resetConsumerAcceptList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDiskEncryptionKeyName">resetDiskEncryptionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetIpRange">resetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetPeeringCidrRange">resetPeeringCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.putTimeouts"></a>

```java
public void putTimeouts(ApigeeInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a>

---

##### `resetConsumerAcceptList` <a name="resetConsumerAcceptList" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetConsumerAcceptList"></a>

```java
public void resetConsumerAcceptList()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDiskEncryptionKeyName` <a name="resetDiskEncryptionKeyName" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDiskEncryptionKeyName"></a>

```java
public void resetDiskEncryptionKeyName()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetId"></a>

```java
public void resetId()
```

##### `resetIpRange` <a name="resetIpRange" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetIpRange"></a>

```java
public void resetIpRange()
```

##### `resetPeeringCidrRange` <a name="resetPeeringCidrRange" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetPeeringCidrRange"></a>

```java
public void resetPeeringCidrRange()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_instance.ApigeeInstance;

ApigeeInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_instance.ApigeeInstance;

ApigeeInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_instance.ApigeeInstance;

ApigeeInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_instance.ApigeeInstance;

ApigeeInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigeeInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApigeeInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigeeInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigeeInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference">ApigeeInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.consumerAcceptListInput">consumerAcceptListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.diskEncryptionKeyNameInput">diskEncryptionKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.ipRangeInput">ipRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.peeringCidrRangeInput">peeringCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.consumerAcceptList">consumerAcceptList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.diskEncryptionKeyName">diskEncryptionKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.peeringCidrRange">peeringCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.timeouts"></a>

```java
public ApigeeInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference">ApigeeInstanceTimeoutsOutputReference</a>

---

##### `consumerAcceptListInput`<sup>Optional</sup> <a name="consumerAcceptListInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.consumerAcceptListInput"></a>

```java
public java.util.List<java.lang.String> getConsumerAcceptListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKeyNameInput`<sup>Optional</sup> <a name="diskEncryptionKeyNameInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.diskEncryptionKeyNameInput"></a>

```java
public java.lang.String getDiskEncryptionKeyNameInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipRangeInput`<sup>Optional</sup> <a name="ipRangeInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.ipRangeInput"></a>

```java
public java.lang.String getIpRangeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `peeringCidrRangeInput`<sup>Optional</sup> <a name="peeringCidrRangeInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.peeringCidrRangeInput"></a>

```java
public java.lang.String getPeeringCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a>

---

##### `consumerAcceptList`<sup>Required</sup> <a name="consumerAcceptList" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.consumerAcceptList"></a>

```java
public java.util.List<java.lang.String> getConsumerAcceptList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKeyName`<sup>Required</sup> <a name="diskEncryptionKeyName" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.diskEncryptionKeyName"></a>

```java
public java.lang.String getDiskEncryptionKeyName();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

##### `peeringCidrRange`<sup>Required</sup> <a name="peeringCidrRange" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.peeringCidrRange"></a>

```java
public java.lang.String getPeeringCidrRange();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeInstance.ApigeeInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeInstanceConfig <a name="ApigeeInstanceConfig" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_instance.ApigeeInstanceConfig;

ApigeeInstanceConfig.builder()
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
    .orgId(java.lang.String)
//  .consumerAcceptList(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .diskEncryptionKeyName(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .ipRange(java.lang.String)
//  .peeringCidrRange(java.lang.String)
//  .timeouts(ApigeeInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Required. Compute Engine location where the instance resides. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Resource ID of the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.consumerAcceptList">consumerAcceptList</a></code> | <code>java.util.List<java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.diskEncryptionKeyName">diskEncryptionKeyName</a></code> | <code>java.lang.String</code> | Customer Managed Encryption Key (CMEK) used for disk and volume encryption. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#id ApigeeInstance#id}. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | IP range represents the customer-provided CIDR block of length 22 that will be used for the Apigee instance creation. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.peeringCidrRange">peeringCidrRange</a></code> | <code>java.lang.String</code> | The size of the CIDR block range that will be reserved by the instance. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Required. Compute Engine location where the instance resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#location ApigeeInstance#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Resource ID of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#name ApigeeInstance#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

The Apigee Organization associated with the Apigee instance, in the format 'organizations/{{org_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#org_id ApigeeInstance#org_id}

---

##### `consumerAcceptList`<sup>Optional</sup> <a name="consumerAcceptList" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.consumerAcceptList"></a>

```java
public java.util.List<java.lang.String> getConsumerAcceptList();
```

- *Type:* java.util.List<java.lang.String>

Optional.

Customer accept list represents the list of projects (id/number) on customer
side that can privately connect to the service attachment. It is an optional field
which the customers can provide during the instance creation. By default, the customer
project associated with the Apigee organization will be included to the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#consumer_accept_list ApigeeInstance#consumer_accept_list}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#description ApigeeInstance#description}

---

##### `diskEncryptionKeyName`<sup>Optional</sup> <a name="diskEncryptionKeyName" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.diskEncryptionKeyName"></a>

```java
public java.lang.String getDiskEncryptionKeyName();
```

- *Type:* java.lang.String

Customer Managed Encryption Key (CMEK) used for disk and volume encryption.

Required for Apigee paid subscriptions only.
Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#disk_encryption_key_name ApigeeInstance#disk_encryption_key_name}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#display_name ApigeeInstance#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#id ApigeeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipRange`<sup>Optional</sup> <a name="ipRange" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

IP range represents the customer-provided CIDR block of length 22 that will be used for the Apigee instance creation.

This optional range, if provided, should be freely
available as part of larger named range the customer has allocated to the Service
Networking peering. If this is not provided, Apigee will automatically request for any
available /22 CIDR block from Service Networking. The customer should use this CIDR block
for configuring their firewall needs to allow traffic from Apigee.
Input format: "a.b.c.d/22"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#ip_range ApigeeInstance#ip_range}

---

##### `peeringCidrRange`<sup>Optional</sup> <a name="peeringCidrRange" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.peeringCidrRange"></a>

```java
public java.lang.String getPeeringCidrRange();
```

- *Type:* java.lang.String

The size of the CIDR block range that will be reserved by the instance.

For valid values,
see [CidrRange](https://cloud.google.com/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances#CidrRange) on the documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#peering_cidr_range ApigeeInstance#peering_cidr_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceConfig.property.timeouts"></a>

```java
public ApigeeInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#timeouts ApigeeInstance#timeouts}

---

### ApigeeInstanceTimeouts <a name="ApigeeInstanceTimeouts" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_instance.ApigeeInstanceTimeouts;

ApigeeInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#create ApigeeInstance#create}. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#delete ApigeeInstance#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#create ApigeeInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_instance#delete ApigeeInstance#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeInstanceTimeoutsOutputReference <a name="ApigeeInstanceTimeoutsOutputReference" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_instance.ApigeeInstanceTimeoutsOutputReference;

new ApigeeInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeInstance.ApigeeInstanceTimeouts">ApigeeInstanceTimeouts</a>

---



