# `google_kms_key_ring_iam_policy`

Refer to the Terraform Registory for docs: [`google_kms_key_ring_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_key_ring_iam_policy).

# `kmsKeyRingIamPolicy` Submodule <a name="`kmsKeyRingIamPolicy` Submodule" id="@cdktf/provider-google.kmsKeyRingIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsKeyRingIamPolicy <a name="KmsKeyRingIamPolicy" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_key_ring_iam_policy google_kms_key_ring_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new KmsKeyRingIamPolicy(Construct Scope, string Id, KmsKeyRingIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig">KmsKeyRingIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig">KmsKeyRingIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

KmsKeyRingIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

KmsKeyRingIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

KmsKeyRingIamPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.keyRingIdInput">KeyRingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.keyRingId">KeyRingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyRingIdInput`<sup>Optional</sup> <a name="KeyRingIdInput" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.keyRingIdInput"></a>

```csharp
public string KeyRingIdInput { get; }
```

- *Type:* string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.policyDataInput"></a>

```csharp
public string PolicyDataInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyRingId`<sup>Required</sup> <a name="KeyRingId" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.keyRingId"></a>

```csharp
public string KeyRingId { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsKeyRingIamPolicyConfig <a name="KmsKeyRingIamPolicyConfig" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new KmsKeyRingIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KeyRingId,
    string PolicyData,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.keyRingId">KeyRingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_key_ring_iam_policy#key_ring_id KmsKeyRingIamPolicy#key_ring_id}. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_key_ring_iam_policy#policy_data KmsKeyRingIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_key_ring_iam_policy#id KmsKeyRingIamPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KeyRingId`<sup>Required</sup> <a name="KeyRingId" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.keyRingId"></a>

```csharp
public string KeyRingId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_key_ring_iam_policy#key_ring_id KmsKeyRingIamPolicy#key_ring_id}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.policyData"></a>

```csharp
public string PolicyData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_key_ring_iam_policy#policy_data KmsKeyRingIamPolicy#policy_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.kmsKeyRingIamPolicy.KmsKeyRingIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.0/docs/resources/kms_key_ring_iam_policy#id KmsKeyRingIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



