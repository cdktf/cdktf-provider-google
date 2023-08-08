# `data_google_apigee_environment_iam_policy`

Refer to the Terraform Registory for docs: [`data_google_apigee_environment_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/data-sources/apigee_environment_iam_policy).

# `dataGoogleApigeeEnvironmentIamPolicy` Submodule <a name="`dataGoogleApigeeEnvironmentIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleApigeeEnvironmentIamPolicy <a name="DataGoogleApigeeEnvironmentIamPolicy" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/data-sources/apigee_environment_iam_policy google_apigee_environment_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleapigeeenvironmentiampolicy"

datagoogleapigeeenvironmentiampolicy.NewDataGoogleApigeeEnvironmentIamPolicy(scope Construct, id *string, config DataGoogleApigeeEnvironmentIamPolicyConfig) DataGoogleApigeeEnvironmentIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig">DataGoogleApigeeEnvironmentIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig">DataGoogleApigeeEnvironmentIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleapigeeenvironmentiampolicy"

datagoogleapigeeenvironmentiampolicy.DataGoogleApigeeEnvironmentIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleapigeeenvironmentiampolicy"

datagoogleapigeeenvironmentiampolicy.DataGoogleApigeeEnvironmentIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleapigeeenvironmentiampolicy"

datagoogleapigeeenvironmentiampolicy.DataGoogleApigeeEnvironmentIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.envIdInput">EnvIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.envId">EnvId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `EnvIdInput`<sup>Optional</sup> <a name="EnvIdInput" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.envIdInput"></a>

```go
func EnvIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.envId"></a>

```go
func EnvId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleApigeeEnvironmentIamPolicyConfig <a name="DataGoogleApigeeEnvironmentIamPolicyConfig" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleapigeeenvironmentiampolicy"

&datagoogleapigeeenvironmentiampolicy.DataGoogleApigeeEnvironmentIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnvId: *string,
	OrgId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.envId">EnvId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/data-sources/apigee_environment_iam_policy#env_id DataGoogleApigeeEnvironmentIamPolicy#env_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.orgId">OrgId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/data-sources/apigee_environment_iam_policy#org_id DataGoogleApigeeEnvironmentIamPolicy#org_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/data-sources/apigee_environment_iam_policy#id DataGoogleApigeeEnvironmentIamPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.envId"></a>

```go
EnvId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/data-sources/apigee_environment_iam_policy#env_id DataGoogleApigeeEnvironmentIamPolicy#env_id}.

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/data-sources/apigee_environment_iam_policy#org_id DataGoogleApigeeEnvironmentIamPolicy#org_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleApigeeEnvironmentIamPolicy.DataGoogleApigeeEnvironmentIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.77.0/docs/data-sources/apigee_environment_iam_policy#id DataGoogleApigeeEnvironmentIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



