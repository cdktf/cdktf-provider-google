# `google_iam_workload_identity_pool`

Refer to the Terraform Registory for docs: [`google_iam_workload_identity_pool`](https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool).

# `iamWorkloadIdentityPool` Submodule <a name="`iamWorkloadIdentityPool` Submodule" id="@cdktf/provider-google.iamWorkloadIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkloadIdentityPool <a name="IamWorkloadIdentityPool" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool google_iam_workload_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkloadIdentityPool(Construct Scope, string Id, IamWorkloadIdentityPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig">IamWorkloadIdentityPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig">IamWorkloadIdentityPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts"></a>

```csharp
private void PutTimeouts(IamWorkloadIdentityPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkloadIdentityPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkloadIdentityPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamWorkloadIdentityPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference">IamWorkloadIdentityPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolIdInput">WorkloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeouts"></a>

```csharp
public IamWorkloadIdentityPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference">IamWorkloadIdentityPoolTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkloadIdentityPoolIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolIdInput" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolIdInput"></a>

```csharp
public string WorkloadIdentityPoolIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.workloadIdentityPoolId"></a>

```csharp
public string WorkloadIdentityPoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkloadIdentityPoolConfig <a name="IamWorkloadIdentityPoolConfig" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkloadIdentityPoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string WorkloadIdentityPoolId,
    string Description = null,
    object Disabled = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    IamWorkloadIdentityPoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.description">Description</a></code> | <code>string</code> | A description of the pool. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.disabled">Disabled</a></code> | <code>object</code> | Whether the pool is disabled. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A display name for the pool. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool#id IamWorkloadIdentityPool#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool#project IamWorkloadIdentityPool#project}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.workloadIdentityPoolId"></a>

```csharp
public string WorkloadIdentityPoolId { get; set; }
```

- *Type:* string

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool#workload_identity_pool_id IamWorkloadIdentityPool#workload_identity_pool_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the pool. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool#description IamWorkloadIdentityPool#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Whether the pool is disabled.

You cannot use a disabled pool to exchange tokens, or use
existing tokens to access resources. If the pool is re-enabled, existing tokens grant
access again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool#disabled IamWorkloadIdentityPool#disabled}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A display name for the pool. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool#display_name IamWorkloadIdentityPool#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool#id IamWorkloadIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool#project IamWorkloadIdentityPool#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolConfig.property.timeouts"></a>

```csharp
public IamWorkloadIdentityPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts">IamWorkloadIdentityPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool#timeouts IamWorkloadIdentityPool#timeouts}

---

### IamWorkloadIdentityPoolTimeouts <a name="IamWorkloadIdentityPoolTimeouts" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkloadIdentityPoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool#create IamWorkloadIdentityPool#create}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool#delete IamWorkloadIdentityPool#delete}. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool#update IamWorkloadIdentityPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool#create IamWorkloadIdentityPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool#delete IamWorkloadIdentityPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/iam_workload_identity_pool#update IamWorkloadIdentityPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkloadIdentityPoolTimeoutsOutputReference <a name="IamWorkloadIdentityPoolTimeoutsOutputReference" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamWorkloadIdentityPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamWorkloadIdentityPool.IamWorkloadIdentityPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



