# `beyondcorpApplication` Submodule <a name="`beyondcorpApplication` Submodule" id="@cdktf/provider-google.beyondcorpApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpApplication <a name="BeyondcorpApplication" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application google_beyondcorp_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplication;

BeyondcorpApplication.Builder.create(Construct scope, java.lang.String id)
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
    .applicationId(java.lang.String)
    .endpointMatchers(IResolvable)
    .endpointMatchers(java.util.List<BeyondcorpApplicationEndpointMatchers>)
    .securityGatewaysId(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BeyondcorpApplicationTimeouts)
//  .upstreams(IResolvable)
//  .upstreams(java.util.List<BeyondcorpApplicationUpstreams>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.endpointMatchers">endpointMatchers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>></code> | endpoint_matchers block. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.securityGatewaysId">securityGatewaysId</a></code> | <code>java.lang.String</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#id BeyondcorpApplication#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#project BeyondcorpApplication#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.upstreams">upstreams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>></code> | upstreams block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Optional.

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#application_id BeyondcorpApplication#application_id}

---

##### `endpointMatchers`<sup>Required</sup> <a name="endpointMatchers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.endpointMatchers"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>>

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#endpoint_matchers BeyondcorpApplication#endpoint_matchers}

---

##### `securityGatewaysId`<sup>Required</sup> <a name="securityGatewaysId" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.securityGatewaysId"></a>

- *Type:* java.lang.String

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#security_gateways_id BeyondcorpApplication#security_gateways_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#display_name BeyondcorpApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#id BeyondcorpApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#project BeyondcorpApplication#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#timeouts BeyondcorpApplication#timeouts}

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.Initializer.parameter.upstreams"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>>

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#upstreams BeyondcorpApplication#upstreams}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putEndpointMatchers">putEndpointMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putUpstreams">putUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetUpstreams">resetUpstreams</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpointMatchers` <a name="putEndpointMatchers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putEndpointMatchers"></a>

```java
public void putEndpointMatchers(IResolvable OR java.util.List<BeyondcorpApplicationEndpointMatchers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putEndpointMatchers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putTimeouts"></a>

```java
public void putTimeouts(BeyondcorpApplicationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a>

---

##### `putUpstreams` <a name="putUpstreams" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putUpstreams"></a>

```java
public void putUpstreams(IResolvable OR java.util.List<BeyondcorpApplicationUpstreams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.putUpstreams.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpstreams` <a name="resetUpstreams" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.resetUpstreams"></a>

```java
public void resetUpstreams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BeyondcorpApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplication;

BeyondcorpApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplication;

BeyondcorpApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplication;

BeyondcorpApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplication;

BeyondcorpApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BeyondcorpApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BeyondcorpApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BeyondcorpApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BeyondcorpApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BeyondcorpApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.endpointMatchers">endpointMatchers</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList">BeyondcorpApplicationEndpointMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference">BeyondcorpApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.upstreams">upstreams</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList">BeyondcorpApplicationUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.endpointMatchersInput">endpointMatchersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.securityGatewaysIdInput">securityGatewaysIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.upstreamsInput">upstreamsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.securityGatewaysId">securityGatewaysId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `endpointMatchers`<sup>Required</sup> <a name="endpointMatchers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.endpointMatchers"></a>

```java
public BeyondcorpApplicationEndpointMatchersList getEndpointMatchers();
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList">BeyondcorpApplicationEndpointMatchersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.timeouts"></a>

```java
public BeyondcorpApplicationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference">BeyondcorpApplicationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.upstreams"></a>

```java
public BeyondcorpApplicationUpstreamsList getUpstreams();
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList">BeyondcorpApplicationUpstreamsList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `endpointMatchersInput`<sup>Optional</sup> <a name="endpointMatchersInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.endpointMatchersInput"></a>

```java
public java.lang.Object getEndpointMatchersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `securityGatewaysIdInput`<sup>Optional</sup> <a name="securityGatewaysIdInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.securityGatewaysIdInput"></a>

```java
public java.lang.String getSecurityGatewaysIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a>

---

##### `upstreamsInput`<sup>Optional</sup> <a name="upstreamsInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.upstreamsInput"></a>

```java
public java.lang.Object getUpstreamsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `securityGatewaysId`<sup>Required</sup> <a name="securityGatewaysId" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.securityGatewaysId"></a>

```java
public java.lang.String getSecurityGatewaysId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpApplicationConfig <a name="BeyondcorpApplicationConfig" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplicationConfig;

BeyondcorpApplicationConfig.builder()
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
    .applicationId(java.lang.String)
    .endpointMatchers(IResolvable)
    .endpointMatchers(java.util.List<BeyondcorpApplicationEndpointMatchers>)
    .securityGatewaysId(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(BeyondcorpApplicationTimeouts)
//  .upstreams(IResolvable)
//  .upstreams(java.util.List<BeyondcorpApplicationUpstreams>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.endpointMatchers">endpointMatchers</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>></code> | endpoint_matchers block. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.securityGatewaysId">securityGatewaysId</a></code> | <code>java.lang.String</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#id BeyondcorpApplication#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#project BeyondcorpApplication#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.upstreams">upstreams</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>></code> | upstreams block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Optional.

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#application_id BeyondcorpApplication#application_id}

---

##### `endpointMatchers`<sup>Required</sup> <a name="endpointMatchers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.endpointMatchers"></a>

```java
public java.lang.Object getEndpointMatchers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>>

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#endpoint_matchers BeyondcorpApplication#endpoint_matchers}

---

##### `securityGatewaysId`<sup>Required</sup> <a name="securityGatewaysId" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.securityGatewaysId"></a>

```java
public java.lang.String getSecurityGatewaysId();
```

- *Type:* java.lang.String

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#security_gateways_id BeyondcorpApplication#security_gateways_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#display_name BeyondcorpApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#id BeyondcorpApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#project BeyondcorpApplication#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.timeouts"></a>

```java
public BeyondcorpApplicationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#timeouts BeyondcorpApplication#timeouts}

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationConfig.property.upstreams"></a>

```java
public java.lang.Object getUpstreams();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>>

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#upstreams BeyondcorpApplication#upstreams}

---

### BeyondcorpApplicationEndpointMatchers <a name="BeyondcorpApplicationEndpointMatchers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplicationEndpointMatchers;

BeyondcorpApplicationEndpointMatchers.builder()
    .hostname(java.lang.String)
//  .ports(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Required. Hostname of the application. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | Optional. Ports of the application. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Required. Hostname of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#hostname BeyondcorpApplication#hostname}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

Optional. Ports of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#ports BeyondcorpApplication#ports}

---

### BeyondcorpApplicationTimeouts <a name="BeyondcorpApplicationTimeouts" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplicationTimeouts;

BeyondcorpApplicationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#create BeyondcorpApplication#create}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#delete BeyondcorpApplication#delete}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#update BeyondcorpApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#create BeyondcorpApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#delete BeyondcorpApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#update BeyondcorpApplication#update}.

---

### BeyondcorpApplicationUpstreams <a name="BeyondcorpApplicationUpstreams" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplicationUpstreams;

BeyondcorpApplicationUpstreams.builder()
//  .egressPolicy(BeyondcorpApplicationUpstreamsEgressPolicy)
//  .network(BeyondcorpApplicationUpstreamsNetwork)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams.property.egressPolicy">egressPolicy</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy">BeyondcorpApplicationUpstreamsEgressPolicy</a></code> | egress_policy block. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams.property.network">network</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork">BeyondcorpApplicationUpstreamsNetwork</a></code> | network block. |

---

##### `egressPolicy`<sup>Optional</sup> <a name="egressPolicy" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams.property.egressPolicy"></a>

```java
public BeyondcorpApplicationUpstreamsEgressPolicy getEgressPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy">BeyondcorpApplicationUpstreamsEgressPolicy</a>

egress_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#egress_policy BeyondcorpApplication#egress_policy}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams.property.network"></a>

```java
public BeyondcorpApplicationUpstreamsNetwork getNetwork();
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork">BeyondcorpApplicationUpstreamsNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#network BeyondcorpApplication#network}

---

### BeyondcorpApplicationUpstreamsEgressPolicy <a name="BeyondcorpApplicationUpstreamsEgressPolicy" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplicationUpstreamsEgressPolicy;

BeyondcorpApplicationUpstreamsEgressPolicy.builder()
    .regions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | Required. List of regions where the application sends traffic to. |

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

Required. List of regions where the application sends traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#regions BeyondcorpApplication#regions}

---

### BeyondcorpApplicationUpstreamsNetwork <a name="BeyondcorpApplicationUpstreamsNetwork" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplicationUpstreamsNetwork;

BeyondcorpApplicationUpstreamsNetwork.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork.property.name">name</a></code> | <code>java.lang.String</code> | Required. Network name is of the format: 'projects/{project}/global/networks/{network}'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Required. Network name is of the format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/beyondcorp_application#name BeyondcorpApplication#name}

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpApplicationEndpointMatchersList <a name="BeyondcorpApplicationEndpointMatchersList" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplicationEndpointMatchersList;

new BeyondcorpApplicationEndpointMatchersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.get"></a>

```java
public BeyondcorpApplicationEndpointMatchersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>>

---


### BeyondcorpApplicationEndpointMatchersOutputReference <a name="BeyondcorpApplicationEndpointMatchersOutputReference" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplicationEndpointMatchersOutputReference;

new BeyondcorpApplicationEndpointMatchersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.resetPorts"></a>

```java
public void resetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.Number> getPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationEndpointMatchers">BeyondcorpApplicationEndpointMatchers</a>

---


### BeyondcorpApplicationTimeoutsOutputReference <a name="BeyondcorpApplicationTimeoutsOutputReference" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplicationTimeoutsOutputReference;

new BeyondcorpApplicationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationTimeouts">BeyondcorpApplicationTimeouts</a>

---


### BeyondcorpApplicationUpstreamsEgressPolicyOutputReference <a name="BeyondcorpApplicationUpstreamsEgressPolicyOutputReference" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference;

new BeyondcorpApplicationUpstreamsEgressPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy">BeyondcorpApplicationUpstreamsEgressPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference.property.internalValue"></a>

```java
public BeyondcorpApplicationUpstreamsEgressPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy">BeyondcorpApplicationUpstreamsEgressPolicy</a>

---


### BeyondcorpApplicationUpstreamsList <a name="BeyondcorpApplicationUpstreamsList" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplicationUpstreamsList;

new BeyondcorpApplicationUpstreamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.get"></a>

```java
public BeyondcorpApplicationUpstreamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>>

---


### BeyondcorpApplicationUpstreamsNetworkOutputReference <a name="BeyondcorpApplicationUpstreamsNetworkOutputReference" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplicationUpstreamsNetworkOutputReference;

new BeyondcorpApplicationUpstreamsNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork">BeyondcorpApplicationUpstreamsNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference.property.internalValue"></a>

```java
public BeyondcorpApplicationUpstreamsNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork">BeyondcorpApplicationUpstreamsNetwork</a>

---


### BeyondcorpApplicationUpstreamsOutputReference <a name="BeyondcorpApplicationUpstreamsOutputReference" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.beyondcorp_application.BeyondcorpApplicationUpstreamsOutputReference;

new BeyondcorpApplicationUpstreamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.putEgressPolicy">putEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.resetEgressPolicy">resetEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgressPolicy` <a name="putEgressPolicy" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.putEgressPolicy"></a>

```java
public void putEgressPolicy(BeyondcorpApplicationUpstreamsEgressPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.putEgressPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy">BeyondcorpApplicationUpstreamsEgressPolicy</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.putNetwork"></a>

```java
public void putNetwork(BeyondcorpApplicationUpstreamsNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork">BeyondcorpApplicationUpstreamsNetwork</a>

---

##### `resetEgressPolicy` <a name="resetEgressPolicy" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.resetEgressPolicy"></a>

```java
public void resetEgressPolicy()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.egressPolicy">egressPolicy</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference">BeyondcorpApplicationUpstreamsEgressPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.network">network</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference">BeyondcorpApplicationUpstreamsNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.egressPolicyInput">egressPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy">BeyondcorpApplicationUpstreamsEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork">BeyondcorpApplicationUpstreamsNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressPolicy`<sup>Required</sup> <a name="egressPolicy" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.egressPolicy"></a>

```java
public BeyondcorpApplicationUpstreamsEgressPolicyOutputReference getEgressPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicyOutputReference">BeyondcorpApplicationUpstreamsEgressPolicyOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.network"></a>

```java
public BeyondcorpApplicationUpstreamsNetworkOutputReference getNetwork();
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetworkOutputReference">BeyondcorpApplicationUpstreamsNetworkOutputReference</a>

---

##### `egressPolicyInput`<sup>Optional</sup> <a name="egressPolicyInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.egressPolicyInput"></a>

```java
public BeyondcorpApplicationUpstreamsEgressPolicy getEgressPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsEgressPolicy">BeyondcorpApplicationUpstreamsEgressPolicy</a>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.networkInput"></a>

```java
public BeyondcorpApplicationUpstreamsNetwork getNetworkInput();
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsNetwork">BeyondcorpApplicationUpstreamsNetwork</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreamsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.beyondcorpApplication.BeyondcorpApplicationUpstreams">BeyondcorpApplicationUpstreams</a>

---



