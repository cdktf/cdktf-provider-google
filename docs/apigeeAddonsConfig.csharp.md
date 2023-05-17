# `google_apigee_addons_config`

Refer to the Terraform Registory for docs: [`google_apigee_addons_config`](https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config).

# `apigeeAddonsConfig` Submodule <a name="`apigeeAddonsConfig` Submodule" id="@cdktf/provider-google.apigeeAddonsConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeAddonsConfig <a name="ApigeeAddonsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config google_apigee_addons_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeAddonsConfig(Construct Scope, string Id, ApigeeAddonsConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig">ApigeeAddonsConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig">ApigeeAddonsConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putAddonsConfig">PutAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetAddonsConfig">ResetAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAddonsConfig` <a name="PutAddonsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putAddonsConfig"></a>

```csharp
private void PutAddonsConfig(ApigeeAddonsConfigAddonsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putAddonsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(ApigeeAddonsConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a>

---

##### `ResetAddonsConfig` <a name="ResetAddonsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetAddonsConfig"></a>

```csharp
private void ResetAddonsConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeAddonsConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeAddonsConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeAddonsConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.addonsConfig">AddonsConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference">ApigeeAddonsConfigAddonsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference">ApigeeAddonsConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.addonsConfigInput">AddonsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.orgInput">OrgInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.org">Org</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AddonsConfig`<sup>Required</sup> <a name="AddonsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.addonsConfig"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigOutputReference AddonsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference">ApigeeAddonsConfigAddonsConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.timeouts"></a>

```csharp
public ApigeeAddonsConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference">ApigeeAddonsConfigTimeoutsOutputReference</a>

---

##### `AddonsConfigInput`<sup>Optional</sup> <a name="AddonsConfigInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.addonsConfigInput"></a>

```csharp
public ApigeeAddonsConfigAddonsConfig AddonsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrgInput`<sup>Optional</sup> <a name="OrgInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.orgInput"></a>

```csharp
public string OrgInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Org`<sup>Required</sup> <a name="Org" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.org"></a>

```csharp
public string Org { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeAddonsConfigAddonsConfig <a name="ApigeeAddonsConfigAddonsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeAddonsConfigAddonsConfig {
    ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig AdvancedApiOpsConfig = null,
    ApigeeAddonsConfigAddonsConfigApiSecurityConfig ApiSecurityConfig = null,
    ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig ConnectorsPlatformConfig = null,
    ApigeeAddonsConfigAddonsConfigIntegrationConfig IntegrationConfig = null,
    ApigeeAddonsConfigAddonsConfigMonetizationConfig MonetizationConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.advancedApiOpsConfig">AdvancedApiOpsConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | advanced_api_ops_config block. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.apiSecurityConfig">ApiSecurityConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | api_security_config block. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.connectorsPlatformConfig">ConnectorsPlatformConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | connectors_platform_config block. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.integrationConfig">IntegrationConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | integration_config block. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.monetizationConfig">MonetizationConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | monetization_config block. |

---

##### `AdvancedApiOpsConfig`<sup>Optional</sup> <a name="AdvancedApiOpsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.advancedApiOpsConfig"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig AdvancedApiOpsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

advanced_api_ops_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#advanced_api_ops_config ApigeeAddonsConfig#advanced_api_ops_config}

---

##### `ApiSecurityConfig`<sup>Optional</sup> <a name="ApiSecurityConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.apiSecurityConfig"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigApiSecurityConfig ApiSecurityConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

api_security_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#api_security_config ApigeeAddonsConfig#api_security_config}

---

##### `ConnectorsPlatformConfig`<sup>Optional</sup> <a name="ConnectorsPlatformConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.connectorsPlatformConfig"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig ConnectorsPlatformConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

connectors_platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#connectors_platform_config ApigeeAddonsConfig#connectors_platform_config}

---

##### `IntegrationConfig`<sup>Optional</sup> <a name="IntegrationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.integrationConfig"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigIntegrationConfig IntegrationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

integration_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#integration_config ApigeeAddonsConfig#integration_config}

---

##### `MonetizationConfig`<sup>Optional</sup> <a name="MonetizationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig.property.monetizationConfig"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigMonetizationConfig MonetizationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

monetization_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#monetization_config ApigeeAddonsConfig#monetization_config}

---

### ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig <a name="ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.property.enabled">Enabled</a></code> | <code>object</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigAddonsConfigApiSecurityConfig <a name="ApigeeAddonsConfigAddonsConfigApiSecurityConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeAddonsConfigAddonsConfigApiSecurityConfig {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig.property.enabled">Enabled</a></code> | <code>object</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig <a name="ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.property.enabled">Enabled</a></code> | <code>object</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigAddonsConfigIntegrationConfig <a name="ApigeeAddonsConfigAddonsConfigIntegrationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeAddonsConfigAddonsConfigIntegrationConfig {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig.property.enabled">Enabled</a></code> | <code>object</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigAddonsConfigMonetizationConfig <a name="ApigeeAddonsConfigAddonsConfigMonetizationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeAddonsConfigAddonsConfigMonetizationConfig {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig.property.enabled">Enabled</a></code> | <code>object</code> | Flag that specifies whether the Advanced API Ops add-on is enabled. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Flag that specifies whether the Advanced API Ops add-on is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#enabled ApigeeAddonsConfig#enabled}

---

### ApigeeAddonsConfigConfig <a name="ApigeeAddonsConfigConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeAddonsConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Org,
    ApigeeAddonsConfigAddonsConfig AddonsConfig = null,
    string Id = null,
    ApigeeAddonsConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.org">Org</a></code> | <code>string</code> | Name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.addonsConfig">AddonsConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a></code> | addons_config block. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#id ApigeeAddonsConfig#id}. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Org`<sup>Required</sup> <a name="Org" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.org"></a>

```csharp
public string Org { get; set; }
```

- *Type:* string

Name of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#org ApigeeAddonsConfig#org}

---

##### `AddonsConfig`<sup>Optional</sup> <a name="AddonsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.addonsConfig"></a>

```csharp
public ApigeeAddonsConfigAddonsConfig AddonsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a>

addons_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#addons_config ApigeeAddonsConfig#addons_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#id ApigeeAddonsConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigConfig.property.timeouts"></a>

```csharp
public ApigeeAddonsConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts">ApigeeAddonsConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#timeouts ApigeeAddonsConfig#timeouts}

---

### ApigeeAddonsConfigTimeouts <a name="ApigeeAddonsConfigTimeouts" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeAddonsConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#create ApigeeAddonsConfig#create}. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#delete ApigeeAddonsConfig#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#update ApigeeAddonsConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#create ApigeeAddonsConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#delete ApigeeAddonsConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.65.2/docs/resources/apigee_addons_config#update ApigeeAddonsConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference.property.internalValue"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

---


### ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference.property.internalValue"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigApiSecurityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

---


### ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference.property.internalValue"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

---


### ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference.property.internalValue"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigIntegrationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

---


### ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference.property.internalValue"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigMonetizationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

---


### ApigeeAddonsConfigAddonsConfigOutputReference <a name="ApigeeAddonsConfigAddonsConfigOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeAddonsConfigAddonsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig">PutAdvancedApiOpsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig">PutApiSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig">PutConnectorsPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig">PutIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig">PutMonetizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetAdvancedApiOpsConfig">ResetAdvancedApiOpsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetApiSecurityConfig">ResetApiSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetConnectorsPlatformConfig">ResetConnectorsPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetIntegrationConfig">ResetIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetMonetizationConfig">ResetMonetizationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedApiOpsConfig` <a name="PutAdvancedApiOpsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig"></a>

```csharp
private void PutAdvancedApiOpsConfig(ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putAdvancedApiOpsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

---

##### `PutApiSecurityConfig` <a name="PutApiSecurityConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig"></a>

```csharp
private void PutApiSecurityConfig(ApigeeAddonsConfigAddonsConfigApiSecurityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putApiSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

---

##### `PutConnectorsPlatformConfig` <a name="PutConnectorsPlatformConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig"></a>

```csharp
private void PutConnectorsPlatformConfig(ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putConnectorsPlatformConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

---

##### `PutIntegrationConfig` <a name="PutIntegrationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig"></a>

```csharp
private void PutIntegrationConfig(ApigeeAddonsConfigAddonsConfigIntegrationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putIntegrationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

---

##### `PutMonetizationConfig` <a name="PutMonetizationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig"></a>

```csharp
private void PutMonetizationConfig(ApigeeAddonsConfigAddonsConfigMonetizationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.putMonetizationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

---

##### `ResetAdvancedApiOpsConfig` <a name="ResetAdvancedApiOpsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetAdvancedApiOpsConfig"></a>

```csharp
private void ResetAdvancedApiOpsConfig()
```

##### `ResetApiSecurityConfig` <a name="ResetApiSecurityConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetApiSecurityConfig"></a>

```csharp
private void ResetApiSecurityConfig()
```

##### `ResetConnectorsPlatformConfig` <a name="ResetConnectorsPlatformConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetConnectorsPlatformConfig"></a>

```csharp
private void ResetConnectorsPlatformConfig()
```

##### `ResetIntegrationConfig` <a name="ResetIntegrationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetIntegrationConfig"></a>

```csharp
private void ResetIntegrationConfig()
```

##### `ResetMonetizationConfig` <a name="ResetMonetizationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.resetMonetizationConfig"></a>

```csharp
private void ResetMonetizationConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfig">AdvancedApiOpsConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfig">ApiSecurityConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference">ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfig">ConnectorsPlatformConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfig">IntegrationConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference">ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfig">MonetizationConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference">ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfigInput">AdvancedApiOpsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfigInput">ApiSecurityConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfigInput">ConnectorsPlatformConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfigInput">IntegrationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfigInput">MonetizationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvancedApiOpsConfig`<sup>Required</sup> <a name="AdvancedApiOpsConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfig"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference AdvancedApiOpsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfigOutputReference</a>

---

##### `ApiSecurityConfig`<sup>Required</sup> <a name="ApiSecurityConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfig"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference ApiSecurityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference">ApigeeAddonsConfigAddonsConfigApiSecurityConfigOutputReference</a>

---

##### `ConnectorsPlatformConfig`<sup>Required</sup> <a name="ConnectorsPlatformConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfig"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference ConnectorsPlatformConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfigOutputReference</a>

---

##### `IntegrationConfig`<sup>Required</sup> <a name="IntegrationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfig"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference IntegrationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference">ApigeeAddonsConfigAddonsConfigIntegrationConfigOutputReference</a>

---

##### `MonetizationConfig`<sup>Required</sup> <a name="MonetizationConfig" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfig"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference MonetizationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference">ApigeeAddonsConfigAddonsConfigMonetizationConfigOutputReference</a>

---

##### `AdvancedApiOpsConfigInput`<sup>Optional</sup> <a name="AdvancedApiOpsConfigInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.advancedApiOpsConfigInput"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig AdvancedApiOpsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig">ApigeeAddonsConfigAddonsConfigAdvancedApiOpsConfig</a>

---

##### `ApiSecurityConfigInput`<sup>Optional</sup> <a name="ApiSecurityConfigInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.apiSecurityConfigInput"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigApiSecurityConfig ApiSecurityConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigApiSecurityConfig">ApigeeAddonsConfigAddonsConfigApiSecurityConfig</a>

---

##### `ConnectorsPlatformConfigInput`<sup>Optional</sup> <a name="ConnectorsPlatformConfigInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.connectorsPlatformConfigInput"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig ConnectorsPlatformConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig">ApigeeAddonsConfigAddonsConfigConnectorsPlatformConfig</a>

---

##### `IntegrationConfigInput`<sup>Optional</sup> <a name="IntegrationConfigInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.integrationConfigInput"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigIntegrationConfig IntegrationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigIntegrationConfig">ApigeeAddonsConfigAddonsConfigIntegrationConfig</a>

---

##### `MonetizationConfigInput`<sup>Optional</sup> <a name="MonetizationConfigInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.monetizationConfigInput"></a>

```csharp
public ApigeeAddonsConfigAddonsConfigMonetizationConfig MonetizationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigMonetizationConfig">ApigeeAddonsConfigAddonsConfigMonetizationConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfigOutputReference.property.internalValue"></a>

```csharp
public ApigeeAddonsConfigAddonsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigAddonsConfig">ApigeeAddonsConfigAddonsConfig</a>

---


### ApigeeAddonsConfigTimeoutsOutputReference <a name="ApigeeAddonsConfigTimeoutsOutputReference" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeAddonsConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeAddonsConfig.ApigeeAddonsConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



