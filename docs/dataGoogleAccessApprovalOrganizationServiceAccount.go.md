# `dataGoogleAccessApprovalOrganizationServiceAccount` Submodule <a name="`dataGoogleAccessApprovalOrganizationServiceAccount` Submodule" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAccessApprovalOrganizationServiceAccount <a name="DataGoogleAccessApprovalOrganizationServiceAccount" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/d/access_approval_organization_service_account google_access_approval_organization_service_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleaccessapprovalorganizationserviceaccount"

datagoogleaccessapprovalorganizationserviceaccount.NewDataGoogleAccessApprovalOrganizationServiceAccount(scope Construct, id *string, config DataGoogleAccessApprovalOrganizationServiceAccountConfig) DataGoogleAccessApprovalOrganizationServiceAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig">DataGoogleAccessApprovalOrganizationServiceAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig">DataGoogleAccessApprovalOrganizationServiceAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleaccessapprovalorganizationserviceaccount"

datagoogleaccessapprovalorganizationserviceaccount.DataGoogleAccessApprovalOrganizationServiceAccount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleaccessapprovalorganizationserviceaccount"

datagoogleaccessapprovalorganizationserviceaccount.DataGoogleAccessApprovalOrganizationServiceAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleaccessapprovalorganizationserviceaccount"

datagoogleaccessapprovalorganizationserviceaccount.DataGoogleAccessApprovalOrganizationServiceAccount_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.accountEmail">AccountEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.organizationIdInput">OrganizationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccountEmail`<sup>Required</sup> <a name="AccountEmail" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.accountEmail"></a>

```go
func AccountEmail() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.organizationIdInput"></a>

```go
func OrganizationIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAccessApprovalOrganizationServiceAccountConfig <a name="DataGoogleAccessApprovalOrganizationServiceAccountConfig" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleaccessapprovalorganizationserviceaccount"

&datagoogleaccessapprovalorganizationserviceaccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OrganizationId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.organizationId">OrganizationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/access_approval_organization_service_account#organization_id DataGoogleAccessApprovalOrganizationServiceAccount#organization_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/access_approval_organization_service_account#id DataGoogleAccessApprovalOrganizationServiceAccount#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.organizationId"></a>

```go
OrganizationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/access_approval_organization_service_account#organization_id DataGoogleAccessApprovalOrganizationServiceAccount#organization_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleAccessApprovalOrganizationServiceAccount.DataGoogleAccessApprovalOrganizationServiceAccountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/access_approval_organization_service_account#id DataGoogleAccessApprovalOrganizationServiceAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



