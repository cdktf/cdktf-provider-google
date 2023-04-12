# `dataGoogleIamPolicy` Submodule <a name="`dataGoogleIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamPolicy <a name="DataGoogleIamPolicy" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/iam_policy google_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiampolicy"

datagoogleiampolicy.NewDataGoogleIamPolicy(scope Construct, id *string, config DataGoogleIamPolicyConfig) DataGoogleIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig">DataGoogleIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig">DataGoogleIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.putAuditConfig">PutAuditConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.putBinding">PutBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.resetAuditConfig">ResetAuditConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.resetBinding">ResetBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAuditConfig` <a name="PutAuditConfig" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.putAuditConfig"></a>

```go
func PutAuditConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.putAuditConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBinding` <a name="PutBinding" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.putBinding"></a>

```go
func PutBinding(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.putBinding.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuditConfig` <a name="ResetAuditConfig" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.resetAuditConfig"></a>

```go
func ResetAuditConfig()
```

##### `ResetBinding` <a name="ResetBinding" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.resetBinding"></a>

```go
func ResetBinding()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiampolicy"

datagoogleiampolicy.DataGoogleIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiampolicy"

datagoogleiampolicy.DataGoogleIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiampolicy"

datagoogleiampolicy.DataGoogleIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.auditConfig">AuditConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList">DataGoogleIamPolicyAuditConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.binding">Binding</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList">DataGoogleIamPolicyBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.auditConfigInput">AuditConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.bindingInput">BindingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AuditConfig`<sup>Required</sup> <a name="AuditConfig" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.auditConfig"></a>

```go
func AuditConfig() DataGoogleIamPolicyAuditConfigList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList">DataGoogleIamPolicyAuditConfigList</a>

---

##### `Binding`<sup>Required</sup> <a name="Binding" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.binding"></a>

```go
func Binding() DataGoogleIamPolicyBindingList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList">DataGoogleIamPolicyBindingList</a>

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `AuditConfigInput`<sup>Optional</sup> <a name="AuditConfigInput" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.auditConfigInput"></a>

```go
func AuditConfigInput() interface{}
```

- *Type:* interface{}

---

##### `BindingInput`<sup>Optional</sup> <a name="BindingInput" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.bindingInput"></a>

```go
func BindingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamPolicyAuditConfig <a name="DataGoogleIamPolicyAuditConfig" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiampolicy"

&datagoogleiampolicy.DataGoogleIamPolicyAuditConfig {
	AuditLogConfigs: interface{},
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig.property.auditLogConfigs">AuditLogConfigs</a></code> | <code>interface{}</code> | audit_log_configs block. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#service DataGoogleIamPolicy#service}. |

---

##### `AuditLogConfigs`<sup>Required</sup> <a name="AuditLogConfigs" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig.property.auditLogConfigs"></a>

```go
AuditLogConfigs interface{}
```

- *Type:* interface{}

audit_log_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#audit_log_configs DataGoogleIamPolicy#audit_log_configs}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#service DataGoogleIamPolicy#service}.

---

### DataGoogleIamPolicyAuditConfigAuditLogConfigs <a name="DataGoogleIamPolicyAuditConfigAuditLogConfigs" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiampolicy"

&datagoogleiampolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs {
	LogType: *string,
	ExemptedMembers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs.property.logType">LogType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#log_type DataGoogleIamPolicy#log_type}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs.property.exemptedMembers">ExemptedMembers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#exempted_members DataGoogleIamPolicy#exempted_members}. |

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs.property.logType"></a>

```go
LogType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#log_type DataGoogleIamPolicy#log_type}.

---

##### `ExemptedMembers`<sup>Optional</sup> <a name="ExemptedMembers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigs.property.exemptedMembers"></a>

```go
ExemptedMembers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#exempted_members DataGoogleIamPolicy#exempted_members}.

---

### DataGoogleIamPolicyBinding <a name="DataGoogleIamPolicyBinding" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiampolicy"

&datagoogleiampolicy.DataGoogleIamPolicyBinding {
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#members DataGoogleIamPolicy#members}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#role DataGoogleIamPolicy#role}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition">DataGoogleIamPolicyBindingCondition</a></code> | condition block. |

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#members DataGoogleIamPolicy#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#role DataGoogleIamPolicy#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBinding.property.condition"></a>

```go
Condition DataGoogleIamPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition">DataGoogleIamPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#condition DataGoogleIamPolicy#condition}

---

### DataGoogleIamPolicyBindingCondition <a name="DataGoogleIamPolicyBindingCondition" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiampolicy"

&datagoogleiampolicy.DataGoogleIamPolicyBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#expression DataGoogleIamPolicy#expression}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#title DataGoogleIamPolicy#title}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#description DataGoogleIamPolicy#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#expression DataGoogleIamPolicy#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#title DataGoogleIamPolicy#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#description DataGoogleIamPolicy#description}.

---

### DataGoogleIamPolicyConfig <a name="DataGoogleIamPolicyConfig" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiampolicy"

&datagoogleiampolicy.DataGoogleIamPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuditConfig: interface{},
	Binding: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.auditConfig">AuditConfig</a></code> | <code>interface{}</code> | audit_config block. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.binding">Binding</a></code> | <code>interface{}</code> | binding block. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#id DataGoogleIamPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuditConfig`<sup>Optional</sup> <a name="AuditConfig" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.auditConfig"></a>

```go
AuditConfig interface{}
```

- *Type:* interface{}

audit_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#audit_config DataGoogleIamPolicy#audit_config}

---

##### `Binding`<sup>Optional</sup> <a name="Binding" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.binding"></a>

```go
Binding interface{}
```

- *Type:* interface{}

binding block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#binding DataGoogleIamPolicy#binding}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iam_policy#id DataGoogleIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamPolicyAuditConfigAuditLogConfigsList <a name="DataGoogleIamPolicyAuditConfigAuditLogConfigsList" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiampolicy"

datagoogleiampolicy.NewDataGoogleIamPolicyAuditConfigAuditLogConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleIamPolicyAuditConfigAuditLogConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.get"></a>

```go
func Get(index *f64) DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference <a name="DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiampolicy"

datagoogleiampolicy.NewDataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.resetExemptedMembers">ResetExemptedMembers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExemptedMembers` <a name="ResetExemptedMembers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.resetExemptedMembers"></a>

```go
func ResetExemptedMembers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.exemptedMembersInput">ExemptedMembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.exemptedMembers">ExemptedMembers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExemptedMembersInput`<sup>Optional</sup> <a name="ExemptedMembersInput" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.exemptedMembersInput"></a>

```go
func ExemptedMembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.logTypeInput"></a>

```go
func LogTypeInput() *string
```

- *Type:* *string

---

##### `ExemptedMembers`<sup>Required</sup> <a name="ExemptedMembers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.exemptedMembers"></a>

```go
func ExemptedMembers() *[]*string
```

- *Type:* *[]*string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataGoogleIamPolicyAuditConfigList <a name="DataGoogleIamPolicyAuditConfigList" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiampolicy"

datagoogleiampolicy.NewDataGoogleIamPolicyAuditConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleIamPolicyAuditConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.get"></a>

```go
func Get(index *f64) DataGoogleIamPolicyAuditConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataGoogleIamPolicyAuditConfigOutputReference <a name="DataGoogleIamPolicyAuditConfigOutputReference" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiampolicy"

datagoogleiampolicy.NewDataGoogleIamPolicyAuditConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleIamPolicyAuditConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.putAuditLogConfigs">PutAuditLogConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuditLogConfigs` <a name="PutAuditLogConfigs" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.putAuditLogConfigs"></a>

```go
func PutAuditLogConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.putAuditLogConfigs.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.auditLogConfigs">AuditLogConfigs</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList">DataGoogleIamPolicyAuditConfigAuditLogConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.auditLogConfigsInput">AuditLogConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuditLogConfigs`<sup>Required</sup> <a name="AuditLogConfigs" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.auditLogConfigs"></a>

```go
func AuditLogConfigs() DataGoogleIamPolicyAuditConfigAuditLogConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigAuditLogConfigsList">DataGoogleIamPolicyAuditConfigAuditLogConfigsList</a>

---

##### `AuditLogConfigsInput`<sup>Optional</sup> <a name="AuditLogConfigsInput" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.auditLogConfigsInput"></a>

```go
func AuditLogConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyAuditConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataGoogleIamPolicyBindingConditionOutputReference <a name="DataGoogleIamPolicyBindingConditionOutputReference" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiampolicy"

datagoogleiampolicy.NewDataGoogleIamPolicyBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataGoogleIamPolicyBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition">DataGoogleIamPolicyBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleIamPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition">DataGoogleIamPolicyBindingCondition</a>

---


### DataGoogleIamPolicyBindingList <a name="DataGoogleIamPolicyBindingList" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiampolicy"

datagoogleiampolicy.NewDataGoogleIamPolicyBindingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleIamPolicyBindingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.get"></a>

```go
func Get(index *f64) DataGoogleIamPolicyBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataGoogleIamPolicyBindingOutputReference <a name="DataGoogleIamPolicyBindingOutputReference" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiampolicy"

datagoogleiampolicy.NewDataGoogleIamPolicyBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleIamPolicyBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.putCondition"></a>

```go
func PutCondition(value DataGoogleIamPolicyBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition">DataGoogleIamPolicyBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.resetCondition"></a>

```go
func ResetCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference">DataGoogleIamPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition">DataGoogleIamPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.condition"></a>

```go
func Condition() DataGoogleIamPolicyBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingConditionOutputReference">DataGoogleIamPolicyBindingConditionOutputReference</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.conditionInput"></a>

```go
func ConditionInput() DataGoogleIamPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingCondition">DataGoogleIamPolicyBindingCondition</a>

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleIamPolicy.DataGoogleIamPolicyBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



