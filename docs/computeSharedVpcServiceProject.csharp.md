# `google_compute_shared_vpc_service_project`

Refer to the Terraform Registory for docs: [`google_compute_shared_vpc_service_project`](https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/compute_shared_vpc_service_project).

# `computeSharedVpcServiceProject` Submodule <a name="`computeSharedVpcServiceProject` Submodule" id="@cdktf/provider-google.computeSharedVpcServiceProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSharedVpcServiceProject <a name="ComputeSharedVpcServiceProject" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/compute_shared_vpc_service_project google_compute_shared_vpc_service_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSharedVpcServiceProject(Construct Scope, string Id, ComputeSharedVpcServiceProjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig">ComputeSharedVpcServiceProjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig">ComputeSharedVpcServiceProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeSharedVpcServiceProjectTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts">ComputeSharedVpcServiceProjectTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeSharedVpcServiceProject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeSharedVpcServiceProject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeSharedVpcServiceProject.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference">ComputeSharedVpcServiceProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.hostProjectInput">HostProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.serviceProjectInput">ServiceProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.hostProject">HostProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.serviceProject">ServiceProject</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.timeouts"></a>

```csharp
public ComputeSharedVpcServiceProjectTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference">ComputeSharedVpcServiceProjectTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `HostProjectInput`<sup>Optional</sup> <a name="HostProjectInput" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.hostProjectInput"></a>

```csharp
public string HostProjectInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServiceProjectInput`<sup>Optional</sup> <a name="ServiceProjectInput" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.serviceProjectInput"></a>

```csharp
public string ServiceProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `HostProject`<sup>Required</sup> <a name="HostProject" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.hostProject"></a>

```csharp
public string HostProject { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceProject`<sup>Required</sup> <a name="ServiceProject" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.serviceProject"></a>

```csharp
public string ServiceProject { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSharedVpcServiceProjectConfig <a name="ComputeSharedVpcServiceProjectConfig" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSharedVpcServiceProjectConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string HostProject,
    string ServiceProject,
    string DeletionPolicy = null,
    string Id = null,
    ComputeSharedVpcServiceProjectTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.hostProject">HostProject</a></code> | <code>string</code> | The ID of a host project to associate. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.serviceProject">ServiceProject</a></code> | <code>string</code> | The ID of the project that will serve as a Shared VPC service project. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | The deletion policy for the shared VPC service. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/compute_shared_vpc_service_project#id ComputeSharedVpcServiceProject#id}. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts">ComputeSharedVpcServiceProjectTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `HostProject`<sup>Required</sup> <a name="HostProject" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.hostProject"></a>

```csharp
public string HostProject { get; set; }
```

- *Type:* string

The ID of a host project to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/compute_shared_vpc_service_project#host_project ComputeSharedVpcServiceProject#host_project}

---

##### `ServiceProject`<sup>Required</sup> <a name="ServiceProject" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.serviceProject"></a>

```csharp
public string ServiceProject { get; set; }
```

- *Type:* string

The ID of the project that will serve as a Shared VPC service project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/compute_shared_vpc_service_project#service_project ComputeSharedVpcServiceProject#service_project}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

The deletion policy for the shared VPC service.

Setting ABANDON allows the resource
to be abandoned rather than deleted. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/compute_shared_vpc_service_project#deletion_policy ComputeSharedVpcServiceProject#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/compute_shared_vpc_service_project#id ComputeSharedVpcServiceProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectConfig.property.timeouts"></a>

```csharp
public ComputeSharedVpcServiceProjectTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts">ComputeSharedVpcServiceProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/compute_shared_vpc_service_project#timeouts ComputeSharedVpcServiceProject#timeouts}

---

### ComputeSharedVpcServiceProjectTimeouts <a name="ComputeSharedVpcServiceProjectTimeouts" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSharedVpcServiceProjectTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/compute_shared_vpc_service_project#create ComputeSharedVpcServiceProject#create}. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/compute_shared_vpc_service_project#delete ComputeSharedVpcServiceProject#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/compute_shared_vpc_service_project#create ComputeSharedVpcServiceProject#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/compute_shared_vpc_service_project#delete ComputeSharedVpcServiceProject#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSharedVpcServiceProjectTimeoutsOutputReference <a name="ComputeSharedVpcServiceProjectTimeoutsOutputReference" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeSharedVpcServiceProjectTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSharedVpcServiceProject.ComputeSharedVpcServiceProjectTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



