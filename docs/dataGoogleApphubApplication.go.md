# `dataGoogleApphubApplication` Submodule <a name="`dataGoogleApphubApplication` Submodule" id="@cdktf/provider-google.dataGoogleApphubApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleApphubApplication <a name="DataGoogleApphubApplication" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/apphub_application google_apphub_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.NewDataGoogleApphubApplication(scope Construct, id *string, config DataGoogleApphubApplicationConfig) DataGoogleApphubApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig">DataGoogleApphubApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig">DataGoogleApphubApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleApphubApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.DataGoogleApphubApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.DataGoogleApphubApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.DataGoogleApphubApplication_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.DataGoogleApphubApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleApphubApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleApphubApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleApphubApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/apphub_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleApphubApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList">DataGoogleApphubApplicationAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList">DataGoogleApphubApplicationScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.attributes"></a>

```go
func Attributes() DataGoogleApphubApplicationAttributesList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList">DataGoogleApphubApplicationAttributesList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.scope"></a>

```go
func Scope() DataGoogleApphubApplicationScopeList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList">DataGoogleApphubApplicationScopeList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleApphubApplicationAttributes <a name="DataGoogleApphubApplicationAttributes" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

&datagoogleapphubapplication.DataGoogleApphubApplicationAttributes {

}
```


### DataGoogleApphubApplicationAttributesBusinessOwners <a name="DataGoogleApphubApplicationAttributesBusinessOwners" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwners.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

&datagoogleapphubapplication.DataGoogleApphubApplicationAttributesBusinessOwners {

}
```


### DataGoogleApphubApplicationAttributesCriticality <a name="DataGoogleApphubApplicationAttributesCriticality" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticality.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

&datagoogleapphubapplication.DataGoogleApphubApplicationAttributesCriticality {

}
```


### DataGoogleApphubApplicationAttributesDeveloperOwners <a name="DataGoogleApphubApplicationAttributesDeveloperOwners" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwners.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

&datagoogleapphubapplication.DataGoogleApphubApplicationAttributesDeveloperOwners {

}
```


### DataGoogleApphubApplicationAttributesEnvironment <a name="DataGoogleApphubApplicationAttributesEnvironment" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

&datagoogleapphubapplication.DataGoogleApphubApplicationAttributesEnvironment {

}
```


### DataGoogleApphubApplicationAttributesOperatorOwners <a name="DataGoogleApphubApplicationAttributesOperatorOwners" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwners.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

&datagoogleapphubapplication.DataGoogleApphubApplicationAttributesOperatorOwners {

}
```


### DataGoogleApphubApplicationConfig <a name="DataGoogleApphubApplicationConfig" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

&datagoogleapphubapplication.DataGoogleApphubApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	Location: *string,
	Project: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Required. The Application identifier. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.location">Location</a></code> | <code>*string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/apphub_application#project DataGoogleApphubApplication#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/apphub_application#id DataGoogleApphubApplication#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Required. The Application identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/apphub_application#application_id DataGoogleApphubApplication#application_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/apphub_application#location DataGoogleApphubApplication#location}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/apphub_application#project DataGoogleApphubApplication#project}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/apphub_application#id DataGoogleApphubApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleApphubApplicationScope <a name="DataGoogleApphubApplicationScope" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

&datagoogleapphubapplication.DataGoogleApphubApplicationScope {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleApphubApplicationAttributesBusinessOwnersList <a name="DataGoogleApphubApplicationAttributesBusinessOwnersList" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.NewDataGoogleApphubApplicationAttributesBusinessOwnersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleApphubApplicationAttributesBusinessOwnersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.get"></a>

```go
func Get(index *f64) DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference <a name="DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.NewDataGoogleApphubApplicationAttributesBusinessOwnersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwners">DataGoogleApphubApplicationAttributesBusinessOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleApphubApplicationAttributesBusinessOwners
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwners">DataGoogleApphubApplicationAttributesBusinessOwners</a>

---


### DataGoogleApphubApplicationAttributesCriticalityList <a name="DataGoogleApphubApplicationAttributesCriticalityList" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.NewDataGoogleApphubApplicationAttributesCriticalityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleApphubApplicationAttributesCriticalityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.get"></a>

```go
func Get(index *f64) DataGoogleApphubApplicationAttributesCriticalityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleApphubApplicationAttributesCriticalityOutputReference <a name="DataGoogleApphubApplicationAttributesCriticalityOutputReference" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.NewDataGoogleApphubApplicationAttributesCriticalityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleApphubApplicationAttributesCriticalityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticality">DataGoogleApphubApplicationAttributesCriticality</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleApphubApplicationAttributesCriticality
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticality">DataGoogleApphubApplicationAttributesCriticality</a>

---


### DataGoogleApphubApplicationAttributesDeveloperOwnersList <a name="DataGoogleApphubApplicationAttributesDeveloperOwnersList" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.NewDataGoogleApphubApplicationAttributesDeveloperOwnersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleApphubApplicationAttributesDeveloperOwnersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.get"></a>

```go
func Get(index *f64) DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference <a name="DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.NewDataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwners">DataGoogleApphubApplicationAttributesDeveloperOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleApphubApplicationAttributesDeveloperOwners
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwners">DataGoogleApphubApplicationAttributesDeveloperOwners</a>

---


### DataGoogleApphubApplicationAttributesEnvironmentList <a name="DataGoogleApphubApplicationAttributesEnvironmentList" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.NewDataGoogleApphubApplicationAttributesEnvironmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleApphubApplicationAttributesEnvironmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.get"></a>

```go
func Get(index *f64) DataGoogleApphubApplicationAttributesEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleApphubApplicationAttributesEnvironmentOutputReference <a name="DataGoogleApphubApplicationAttributesEnvironmentOutputReference" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.NewDataGoogleApphubApplicationAttributesEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleApphubApplicationAttributesEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironment">DataGoogleApphubApplicationAttributesEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleApphubApplicationAttributesEnvironment
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironment">DataGoogleApphubApplicationAttributesEnvironment</a>

---


### DataGoogleApphubApplicationAttributesList <a name="DataGoogleApphubApplicationAttributesList" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.NewDataGoogleApphubApplicationAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleApphubApplicationAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.get"></a>

```go
func Get(index *f64) DataGoogleApphubApplicationAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleApphubApplicationAttributesOperatorOwnersList <a name="DataGoogleApphubApplicationAttributesOperatorOwnersList" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.NewDataGoogleApphubApplicationAttributesOperatorOwnersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleApphubApplicationAttributesOperatorOwnersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.get"></a>

```go
func Get(index *f64) DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference <a name="DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.NewDataGoogleApphubApplicationAttributesOperatorOwnersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwners">DataGoogleApphubApplicationAttributesOperatorOwners</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleApphubApplicationAttributesOperatorOwners
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwners">DataGoogleApphubApplicationAttributesOperatorOwners</a>

---


### DataGoogleApphubApplicationAttributesOutputReference <a name="DataGoogleApphubApplicationAttributesOutputReference" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.NewDataGoogleApphubApplicationAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleApphubApplicationAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.businessOwners">BusinessOwners</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList">DataGoogleApphubApplicationAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.criticality">Criticality</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList">DataGoogleApphubApplicationAttributesCriticalityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.developerOwners">DeveloperOwners</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList">DataGoogleApphubApplicationAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList">DataGoogleApphubApplicationAttributesEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.operatorOwners">OperatorOwners</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList">DataGoogleApphubApplicationAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributes">DataGoogleApphubApplicationAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BusinessOwners`<sup>Required</sup> <a name="BusinessOwners" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.businessOwners"></a>

```go
func BusinessOwners() DataGoogleApphubApplicationAttributesBusinessOwnersList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesBusinessOwnersList">DataGoogleApphubApplicationAttributesBusinessOwnersList</a>

---

##### `Criticality`<sup>Required</sup> <a name="Criticality" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.criticality"></a>

```go
func Criticality() DataGoogleApphubApplicationAttributesCriticalityList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesCriticalityList">DataGoogleApphubApplicationAttributesCriticalityList</a>

---

##### `DeveloperOwners`<sup>Required</sup> <a name="DeveloperOwners" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.developerOwners"></a>

```go
func DeveloperOwners() DataGoogleApphubApplicationAttributesDeveloperOwnersList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesDeveloperOwnersList">DataGoogleApphubApplicationAttributesDeveloperOwnersList</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.environment"></a>

```go
func Environment() DataGoogleApphubApplicationAttributesEnvironmentList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesEnvironmentList">DataGoogleApphubApplicationAttributesEnvironmentList</a>

---

##### `OperatorOwners`<sup>Required</sup> <a name="OperatorOwners" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.operatorOwners"></a>

```go
func OperatorOwners() DataGoogleApphubApplicationAttributesOperatorOwnersList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOperatorOwnersList">DataGoogleApphubApplicationAttributesOperatorOwnersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleApphubApplicationAttributes
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationAttributes">DataGoogleApphubApplicationAttributes</a>

---


### DataGoogleApphubApplicationScopeList <a name="DataGoogleApphubApplicationScopeList" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.NewDataGoogleApphubApplicationScopeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleApphubApplicationScopeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.get"></a>

```go
func Get(index *f64) DataGoogleApphubApplicationScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleApphubApplicationScopeOutputReference <a name="DataGoogleApphubApplicationScopeOutputReference" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagoogleapphubapplication"

datagoogleapphubapplication.NewDataGoogleApphubApplicationScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleApphubApplicationScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScope">DataGoogleApphubApplicationScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleApphubApplicationScope
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubApplication.DataGoogleApphubApplicationScope">DataGoogleApphubApplicationScope</a>

---



