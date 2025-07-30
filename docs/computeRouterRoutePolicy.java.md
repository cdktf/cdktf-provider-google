# `computeRouterRoutePolicy` Submodule <a name="`computeRouterRoutePolicy` Submodule" id="@cdktf/provider-google.computeRouterRoutePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRouterRoutePolicy <a name="ComputeRouterRoutePolicy" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy google_compute_router_route_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_route_policy.ComputeRouterRoutePolicy;

ComputeRouterRoutePolicy.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .router(java.lang.String)
    .terms(IResolvable)
    .terms(java.util.List<ComputeRouterRoutePolicyTerms>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(ComputeRouterRoutePolicyTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the route policy. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.router">router</a></code> | <code>java.lang.String</code> | The name of the Cloud Router in which this route policy will be configured. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.terms">terms</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms">ComputeRouterRoutePolicyTerms</a>></code> | terms block. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#id ComputeRouterRoutePolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#project ComputeRouterRoutePolicy#project}. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts">ComputeRouterRoutePolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | This is policy's type, which is one of IMPORT or EXPORT Possible values: ["ROUTE_POLICY_TYPE_IMPORT", "ROUTE_POLICY_TYPE_EXPORT"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the route policy.

This policy's name, which must be a resource ID segment and unique within all policies owned by the Router

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#name ComputeRouterRoutePolicy#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.router"></a>

- *Type:* java.lang.String

The name of the Cloud Router in which this route policy will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#router ComputeRouterRoutePolicy#router}

---

##### `terms`<sup>Required</sup> <a name="terms" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.terms"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms">ComputeRouterRoutePolicyTerms</a>>

terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#terms ComputeRouterRoutePolicy#terms}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#id ComputeRouterRoutePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#project ComputeRouterRoutePolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#region ComputeRouterRoutePolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts">ComputeRouterRoutePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#timeouts ComputeRouterRoutePolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.Initializer.parameter.type"></a>

- *Type:* java.lang.String

This is policy's type, which is one of IMPORT or EXPORT Possible values: ["ROUTE_POLICY_TYPE_IMPORT", "ROUTE_POLICY_TYPE_EXPORT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#type ComputeRouterRoutePolicy#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTerms">putTerms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTerms` <a name="putTerms" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTerms"></a>

```java
public void putTerms(IResolvable OR java.util.List<ComputeRouterRoutePolicyTerms> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTerms.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms">ComputeRouterRoutePolicyTerms</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTimeouts"></a>

```java
public void putTimeouts(ComputeRouterRoutePolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts">ComputeRouterRoutePolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRouterRoutePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_route_policy.ComputeRouterRoutePolicy;

ComputeRouterRoutePolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_route_policy.ComputeRouterRoutePolicy;

ComputeRouterRoutePolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_route_policy.ComputeRouterRoutePolicy;

ComputeRouterRoutePolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_route_policy.ComputeRouterRoutePolicy;

ComputeRouterRoutePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeRouterRoutePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeRouterRoutePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeRouterRoutePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeRouterRoutePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRouterRoutePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terms">terms</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList">ComputeRouterRoutePolicyTermsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference">ComputeRouterRoutePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.routerInput">routerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.termsInput">termsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms">ComputeRouterRoutePolicyTerms</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts">ComputeRouterRoutePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.router">router</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `terms`<sup>Required</sup> <a name="terms" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.terms"></a>

```java
public ComputeRouterRoutePolicyTermsList getTerms();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList">ComputeRouterRoutePolicyTermsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.timeouts"></a>

```java
public ComputeRouterRoutePolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference">ComputeRouterRoutePolicyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.routerInput"></a>

```java
public java.lang.String getRouterInput();
```

- *Type:* java.lang.String

---

##### `termsInput`<sup>Optional</sup> <a name="termsInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.termsInput"></a>

```java
public java.lang.Object getTermsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms">ComputeRouterRoutePolicyTerms</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts">ComputeRouterRoutePolicyTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouterRoutePolicyConfig <a name="ComputeRouterRoutePolicyConfig" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_route_policy.ComputeRouterRoutePolicyConfig;

ComputeRouterRoutePolicyConfig.builder()
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
    .name(java.lang.String)
    .router(java.lang.String)
    .terms(IResolvable)
    .terms(java.util.List<ComputeRouterRoutePolicyTerms>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(ComputeRouterRoutePolicyTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the route policy. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.router">router</a></code> | <code>java.lang.String</code> | The name of the Cloud Router in which this route policy will be configured. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.terms">terms</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms">ComputeRouterRoutePolicyTerms</a>></code> | terms block. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#id ComputeRouterRoutePolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#project ComputeRouterRoutePolicy#project}. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts">ComputeRouterRoutePolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.type">type</a></code> | <code>java.lang.String</code> | This is policy's type, which is one of IMPORT or EXPORT Possible values: ["ROUTE_POLICY_TYPE_IMPORT", "ROUTE_POLICY_TYPE_EXPORT"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the route policy.

This policy's name, which must be a resource ID segment and unique within all policies owned by the Router

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#name ComputeRouterRoutePolicy#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

The name of the Cloud Router in which this route policy will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#router ComputeRouterRoutePolicy#router}

---

##### `terms`<sup>Required</sup> <a name="terms" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.terms"></a>

```java
public java.lang.Object getTerms();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms">ComputeRouterRoutePolicyTerms</a>>

terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#terms ComputeRouterRoutePolicy#terms}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#id ComputeRouterRoutePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#project ComputeRouterRoutePolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#region ComputeRouterRoutePolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.timeouts"></a>

```java
public ComputeRouterRoutePolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts">ComputeRouterRoutePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#timeouts ComputeRouterRoutePolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

This is policy's type, which is one of IMPORT or EXPORT Possible values: ["ROUTE_POLICY_TYPE_IMPORT", "ROUTE_POLICY_TYPE_EXPORT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#type ComputeRouterRoutePolicy#type}

---

### ComputeRouterRoutePolicyTerms <a name="ComputeRouterRoutePolicyTerms" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_route_policy.ComputeRouterRoutePolicyTerms;

ComputeRouterRoutePolicyTerms.builder()
    .match(ComputeRouterRoutePolicyTermsMatch)
    .priority(java.lang.Number)
//  .actions(IResolvable)
//  .actions(java.util.List<ComputeRouterRoutePolicyTermsActions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.priority">priority</a></code> | <code>java.lang.Number</code> | The evaluation priority for this term, which must be between 0 (inclusive) and 231 (exclusive), and unique within the list. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.actions">actions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions">ComputeRouterRoutePolicyTermsActions</a>></code> | actions block. |

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.match"></a>

```java
public ComputeRouterRoutePolicyTermsMatch getMatch();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#match ComputeRouterRoutePolicy#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The evaluation priority for this term, which must be between 0 (inclusive) and 231 (exclusive), and unique within the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#priority ComputeRouterRoutePolicy#priority}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms.property.actions"></a>

```java
public java.lang.Object getActions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions">ComputeRouterRoutePolicyTermsActions</a>>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#actions ComputeRouterRoutePolicy#actions}

---

### ComputeRouterRoutePolicyTermsActions <a name="ComputeRouterRoutePolicyTermsActions" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_route_policy.ComputeRouterRoutePolicyTermsActions;

ComputeRouterRoutePolicyTermsActions.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#expression ComputeRouterRoutePolicy#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#description ComputeRouterRoutePolicy#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#location ComputeRouterRoutePolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#title ComputeRouterRoutePolicy#title}

---

### ComputeRouterRoutePolicyTermsMatch <a name="ComputeRouterRoutePolicyTermsMatch" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_route_policy.ComputeRouterRoutePolicyTermsMatch;

ComputeRouterRoutePolicyTermsMatch.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#expression ComputeRouterRoutePolicy#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#description ComputeRouterRoutePolicy#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#location ComputeRouterRoutePolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#title ComputeRouterRoutePolicy#title}

---

### ComputeRouterRoutePolicyTimeouts <a name="ComputeRouterRoutePolicyTimeouts" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_route_policy.ComputeRouterRoutePolicyTimeouts;

ComputeRouterRoutePolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#create ComputeRouterRoutePolicy#create}. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#delete ComputeRouterRoutePolicy#delete}. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#update ComputeRouterRoutePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#create ComputeRouterRoutePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#delete ComputeRouterRoutePolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_router_route_policy#update ComputeRouterRoutePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouterRoutePolicyTermsActionsList <a name="ComputeRouterRoutePolicyTermsActionsList" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_route_policy.ComputeRouterRoutePolicyTermsActionsList;

new ComputeRouterRoutePolicyTermsActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.get"></a>

```java
public ComputeRouterRoutePolicyTermsActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions">ComputeRouterRoutePolicyTermsActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions">ComputeRouterRoutePolicyTermsActions</a>>

---


### ComputeRouterRoutePolicyTermsActionsOutputReference <a name="ComputeRouterRoutePolicyTermsActionsOutputReference" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_route_policy.ComputeRouterRoutePolicyTermsActionsOutputReference;

new ComputeRouterRoutePolicyTermsActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions">ComputeRouterRoutePolicyTermsActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions">ComputeRouterRoutePolicyTermsActions</a>

---


### ComputeRouterRoutePolicyTermsList <a name="ComputeRouterRoutePolicyTermsList" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_route_policy.ComputeRouterRoutePolicyTermsList;

new ComputeRouterRoutePolicyTermsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.get"></a>

```java
public ComputeRouterRoutePolicyTermsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms">ComputeRouterRoutePolicyTerms</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms">ComputeRouterRoutePolicyTerms</a>>

---


### ComputeRouterRoutePolicyTermsMatchOutputReference <a name="ComputeRouterRoutePolicyTermsMatchOutputReference" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_route_policy.ComputeRouterRoutePolicyTermsMatchOutputReference;

new ComputeRouterRoutePolicyTermsMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference.property.internalValue"></a>

```java
public ComputeRouterRoutePolicyTermsMatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a>

---


### ComputeRouterRoutePolicyTermsOutputReference <a name="ComputeRouterRoutePolicyTermsOutputReference" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_route_policy.ComputeRouterRoutePolicyTermsOutputReference;

new ComputeRouterRoutePolicyTermsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resetActions">resetActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putActions"></a>

```java
public void putActions(IResolvable OR java.util.List<ComputeRouterRoutePolicyTermsActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putActions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions">ComputeRouterRoutePolicyTermsActions</a>>

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putMatch"></a>

```java
public void putMatch(ComputeRouterRoutePolicyTermsMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a>

---

##### `resetActions` <a name="resetActions" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.resetActions"></a>

```java
public void resetActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList">ComputeRouterRoutePolicyTermsActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference">ComputeRouterRoutePolicyTermsMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.actionsInput">actionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions">ComputeRouterRoutePolicyTermsActions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms">ComputeRouterRoutePolicyTerms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.actions"></a>

```java
public ComputeRouterRoutePolicyTermsActionsList getActions();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActionsList">ComputeRouterRoutePolicyTermsActionsList</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.match"></a>

```java
public ComputeRouterRoutePolicyTermsMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatchOutputReference">ComputeRouterRoutePolicyTermsMatchOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.actionsInput"></a>

```java
public java.lang.Object getActionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsActions">ComputeRouterRoutePolicyTermsActions</a>>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.matchInput"></a>

```java
public ComputeRouterRoutePolicyTermsMatch getMatchInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsMatch">ComputeRouterRoutePolicyTermsMatch</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTermsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTerms">ComputeRouterRoutePolicyTerms</a>

---


### ComputeRouterRoutePolicyTimeoutsOutputReference <a name="ComputeRouterRoutePolicyTimeoutsOutputReference" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_route_policy.ComputeRouterRoutePolicyTimeoutsOutputReference;

new ComputeRouterRoutePolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts">ComputeRouterRoutePolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouterRoutePolicy.ComputeRouterRoutePolicyTimeouts">ComputeRouterRoutePolicyTimeouts</a>

---



