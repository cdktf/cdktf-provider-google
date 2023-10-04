# `google_iap_web_type_app_engine_iam_binding`

Refer to the Terraform Registory for docs: [`google_iap_web_type_app_engine_iam_binding`](https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding).

# `iapWebTypeAppEngineIamBinding` Submodule <a name="`iapWebTypeAppEngineIamBinding` Submodule" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapWebTypeAppEngineIamBinding <a name="IapWebTypeAppEngineIamBinding" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding google_iap_web_type_app_engine_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapWebTypeAppEngineIamBinding(Construct Scope, string Id, IapWebTypeAppEngineIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig">IapWebTypeAppEngineIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig">IapWebTypeAppEngineIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.putCondition"></a>

```csharp
private void PutCondition(IapWebTypeAppEngineIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingCondition">IapWebTypeAppEngineIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IapWebTypeAppEngineIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IapWebTypeAppEngineIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IapWebTypeAppEngineIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference">IapWebTypeAppEngineIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingCondition">IapWebTypeAppEngineIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.condition"></a>

```csharp
public IapWebTypeAppEngineIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference">IapWebTypeAppEngineIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.conditionInput"></a>

```csharp
public IapWebTypeAppEngineIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingCondition">IapWebTypeAppEngineIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IapWebTypeAppEngineIamBindingCondition <a name="IapWebTypeAppEngineIamBindingCondition" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapWebTypeAppEngineIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#expression IapWebTypeAppEngineIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#title IapWebTypeAppEngineIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#description IapWebTypeAppEngineIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#expression IapWebTypeAppEngineIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#title IapWebTypeAppEngineIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#description IapWebTypeAppEngineIamBinding#description}.

---

### IapWebTypeAppEngineIamBindingConfig <a name="IapWebTypeAppEngineIamBindingConfig" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapWebTypeAppEngineIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppId,
    string[] Members,
    string Role,
    IapWebTypeAppEngineIamBindingCondition Condition = null,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.appId">AppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#app_id IapWebTypeAppEngineIamBinding#app_id}. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#members IapWebTypeAppEngineIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#role IapWebTypeAppEngineIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingCondition">IapWebTypeAppEngineIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#id IapWebTypeAppEngineIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#project IapWebTypeAppEngineIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#app_id IapWebTypeAppEngineIamBinding#app_id}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#members IapWebTypeAppEngineIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#role IapWebTypeAppEngineIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.condition"></a>

```csharp
public IapWebTypeAppEngineIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingCondition">IapWebTypeAppEngineIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#condition IapWebTypeAppEngineIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#id IapWebTypeAppEngineIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/iap_web_type_app_engine_iam_binding#project IapWebTypeAppEngineIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapWebTypeAppEngineIamBindingConditionOutputReference <a name="IapWebTypeAppEngineIamBindingConditionOutputReference" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IapWebTypeAppEngineIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingCondition">IapWebTypeAppEngineIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public IapWebTypeAppEngineIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iapWebTypeAppEngineIamBinding.IapWebTypeAppEngineIamBindingCondition">IapWebTypeAppEngineIamBindingCondition</a>

---



