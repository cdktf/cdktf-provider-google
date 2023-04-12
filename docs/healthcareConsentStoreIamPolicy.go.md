# `healthcareConsentStoreIamPolicy` Submodule <a name="`healthcareConsentStoreIamPolicy` Submodule" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareConsentStoreIamPolicy <a name="HealthcareConsentStoreIamPolicy" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_policy google_healthcare_consent_store_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcareconsentstoreiampolicy"

healthcareconsentstoreiampolicy.NewHealthcareConsentStoreIamPolicy(scope Construct, id *string, config HealthcareConsentStoreIamPolicyConfig) HealthcareConsentStoreIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig">HealthcareConsentStoreIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig">HealthcareConsentStoreIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcareconsentstoreiampolicy"

healthcareconsentstoreiampolicy.HealthcareConsentStoreIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcareconsentstoreiampolicy"

healthcareconsentstoreiampolicy.HealthcareConsentStoreIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcareconsentstoreiampolicy"

healthcareconsentstoreiampolicy.HealthcareConsentStoreIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.consentStoreIdInput">ConsentStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.consentStoreId">ConsentStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConsentStoreIdInput`<sup>Optional</sup> <a name="ConsentStoreIdInput" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.consentStoreIdInput"></a>

```go
func ConsentStoreIdInput() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ConsentStoreId`<sup>Required</sup> <a name="ConsentStoreId" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.consentStoreId"></a>

```go
func ConsentStoreId() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareConsentStoreIamPolicyConfig <a name="HealthcareConsentStoreIamPolicyConfig" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcareconsentstoreiampolicy"

&healthcareconsentstoreiampolicy.HealthcareConsentStoreIamPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConsentStoreId: *string,
	Dataset: *string,
	PolicyData: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.consentStoreId">ConsentStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_policy#consent_store_id HealthcareConsentStoreIamPolicy#consent_store_id}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.dataset">Dataset</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_policy#dataset HealthcareConsentStoreIamPolicy#dataset}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_policy#policy_data HealthcareConsentStoreIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_policy#id HealthcareConsentStoreIamPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConsentStoreId`<sup>Required</sup> <a name="ConsentStoreId" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.consentStoreId"></a>

```go
ConsentStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_policy#consent_store_id HealthcareConsentStoreIamPolicy#consent_store_id}.

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_policy#dataset HealthcareConsentStoreIamPolicy#dataset}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_policy#policy_data HealthcareConsentStoreIamPolicy#policy_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.healthcareConsentStoreIamPolicy.HealthcareConsentStoreIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_policy#id HealthcareConsentStoreIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



