# `healthcareFhirStoreIamPolicy` Submodule <a name="`healthcareFhirStoreIamPolicy` Submodule" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareFhirStoreIamPolicy <a name="HealthcareFhirStoreIamPolicy" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_policy google_healthcare_fhir_store_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarefhirstoreiampolicy"

healthcarefhirstoreiampolicy.NewHealthcareFhirStoreIamPolicy(scope Construct, id *string, config HealthcareFhirStoreIamPolicyConfig) HealthcareFhirStoreIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig">HealthcareFhirStoreIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig">HealthcareFhirStoreIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarefhirstoreiampolicy"

healthcarefhirstoreiampolicy.HealthcareFhirStoreIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarefhirstoreiampolicy"

healthcarefhirstoreiampolicy.HealthcareFhirStoreIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarefhirstoreiampolicy"

healthcarefhirstoreiampolicy.HealthcareFhirStoreIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.fhirStoreIdInput">FhirStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.fhirStoreId">FhirStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `FhirStoreIdInput`<sup>Optional</sup> <a name="FhirStoreIdInput" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.fhirStoreIdInput"></a>

```go
func FhirStoreIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `FhirStoreId`<sup>Required</sup> <a name="FhirStoreId" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.fhirStoreId"></a>

```go
func FhirStoreId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareFhirStoreIamPolicyConfig <a name="HealthcareFhirStoreIamPolicyConfig" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarefhirstoreiampolicy"

&healthcarefhirstoreiampolicy.HealthcareFhirStoreIamPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FhirStoreId: *string,
	PolicyData: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.fhirStoreId">FhirStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_policy#fhir_store_id HealthcareFhirStoreIamPolicy#fhir_store_id}. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_policy#policy_data HealthcareFhirStoreIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_policy#id HealthcareFhirStoreIamPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FhirStoreId`<sup>Required</sup> <a name="FhirStoreId" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.fhirStoreId"></a>

```go
FhirStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_policy#fhir_store_id HealthcareFhirStoreIamPolicy#fhir_store_id}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_policy#policy_data HealthcareFhirStoreIamPolicy#policy_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.healthcareFhirStoreIamPolicy.HealthcareFhirStoreIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_fhir_store_iam_policy#id HealthcareFhirStoreIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



