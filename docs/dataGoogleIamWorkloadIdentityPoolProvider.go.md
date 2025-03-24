# `dataGoogleIamWorkloadIdentityPoolProvider` Submodule <a name="`dataGoogleIamWorkloadIdentityPoolProvider` Submodule" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPoolProvider <a name="DataGoogleIamWorkloadIdentityPoolProvider" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/iam_workload_identity_pool_provider google_iam_workload_identity_pool_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.NewDataGoogleIamWorkloadIdentityPoolProvider(scope Construct, id *string, config DataGoogleIamWorkloadIdentityPoolProviderConfig) DataGoogleIamWorkloadIdentityPoolProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig">DataGoogleIamWorkloadIdentityPoolProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig">DataGoogleIamWorkloadIdentityPoolProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleIamWorkloadIdentityPoolProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.DataGoogleIamWorkloadIdentityPoolProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.DataGoogleIamWorkloadIdentityPoolProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.DataGoogleIamWorkloadIdentityPoolProvider_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.DataGoogleIamWorkloadIdentityPoolProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleIamWorkloadIdentityPoolProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPoolProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleIamWorkloadIdentityPoolProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/iam_workload_identity_pool_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPoolProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.attributeCondition">AttributeCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.attributeMapping">AttributeMapping</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.aws">Aws</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList">DataGoogleIamWorkloadIdentityPoolProviderAwsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.disabled">Disabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.oidc">Oidc</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList">DataGoogleIamWorkloadIdentityPoolProviderOidcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList">DataGoogleIamWorkloadIdentityPoolProviderSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.x509">X509</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List">DataGoogleIamWorkloadIdentityPoolProviderX509List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput">WorkloadIdentityPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput">WorkloadIdentityPoolProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId">WorkloadIdentityPoolProviderId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AttributeCondition`<sup>Required</sup> <a name="AttributeCondition" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.attributeCondition"></a>

```go
func AttributeCondition() *string
```

- *Type:* *string

---

##### `AttributeMapping`<sup>Required</sup> <a name="AttributeMapping" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.attributeMapping"></a>

```go
func AttributeMapping() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.aws"></a>

```go
func Aws() DataGoogleIamWorkloadIdentityPoolProviderAwsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList">DataGoogleIamWorkloadIdentityPoolProviderAwsList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.disabled"></a>

```go
func Disabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Oidc`<sup>Required</sup> <a name="Oidc" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.oidc"></a>

```go
func Oidc() DataGoogleIamWorkloadIdentityPoolProviderOidcList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList">DataGoogleIamWorkloadIdentityPoolProviderOidcList</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.saml"></a>

```go
func Saml() DataGoogleIamWorkloadIdentityPoolProviderSamlList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList">DataGoogleIamWorkloadIdentityPoolProviderSamlList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `X509`<sup>Required</sup> <a name="X509" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.x509"></a>

```go
func X509() DataGoogleIamWorkloadIdentityPoolProviderX509List
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List">DataGoogleIamWorkloadIdentityPoolProviderX509List</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `WorkloadIdentityPoolIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolIdInput" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput"></a>

```go
func WorkloadIdentityPoolIdInput() *string
```

- *Type:* *string

---

##### `WorkloadIdentityPoolProviderIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolProviderIdInput" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput"></a>

```go
func WorkloadIdentityPoolProviderIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId"></a>

```go
func WorkloadIdentityPoolId() *string
```

- *Type:* *string

---

##### `WorkloadIdentityPoolProviderId`<sup>Required</sup> <a name="WorkloadIdentityPoolProviderId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId"></a>

```go
func WorkloadIdentityPoolProviderId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolProviderAws <a name="DataGoogleIamWorkloadIdentityPoolProviderAws" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

&datagoogleiamworkloadidentitypoolprovider.DataGoogleIamWorkloadIdentityPoolProviderAws {

}
```


### DataGoogleIamWorkloadIdentityPoolProviderConfig <a name="DataGoogleIamWorkloadIdentityPoolProviderConfig" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

&datagoogleiamworkloadidentitypoolprovider.DataGoogleIamWorkloadIdentityPoolProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WorkloadIdentityPoolId: *string,
	WorkloadIdentityPoolProviderId: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>*string</code> | The ID used for the pool, which is the final component of the pool resource name. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId">WorkloadIdentityPoolProviderId</a></code> | <code>*string</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/iam_workload_identity_pool_provider#id DataGoogleIamWorkloadIdentityPoolProvider#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/iam_workload_identity_pool_provider#project DataGoogleIamWorkloadIdentityPoolProvider#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId"></a>

```go
WorkloadIdentityPoolId *string
```

- *Type:* *string

The ID used for the pool, which is the final component of the pool resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/iam_workload_identity_pool_provider#workload_identity_pool_id DataGoogleIamWorkloadIdentityPoolProvider#workload_identity_pool_id}

---

##### `WorkloadIdentityPoolProviderId`<sup>Required</sup> <a name="WorkloadIdentityPoolProviderId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId"></a>

```go
WorkloadIdentityPoolProviderId *string
```

- *Type:* *string

The ID for the provider, which becomes the final component of the resource name.

This
value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/iam_workload_identity_pool_provider#workload_identity_pool_provider_id DataGoogleIamWorkloadIdentityPoolProvider#workload_identity_pool_provider_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/iam_workload_identity_pool_provider#id DataGoogleIamWorkloadIdentityPoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/iam_workload_identity_pool_provider#project DataGoogleIamWorkloadIdentityPoolProvider#project}.

---

### DataGoogleIamWorkloadIdentityPoolProviderOidc <a name="DataGoogleIamWorkloadIdentityPoolProviderOidc" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

&datagoogleiamworkloadidentitypoolprovider.DataGoogleIamWorkloadIdentityPoolProviderOidc {

}
```


### DataGoogleIamWorkloadIdentityPoolProviderSaml <a name="DataGoogleIamWorkloadIdentityPoolProviderSaml" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSaml.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

&datagoogleiamworkloadidentitypoolprovider.DataGoogleIamWorkloadIdentityPoolProviderSaml {

}
```


### DataGoogleIamWorkloadIdentityPoolProviderX509 <a name="DataGoogleIamWorkloadIdentityPoolProviderX509" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

&datagoogleiamworkloadidentitypoolprovider.DataGoogleIamWorkloadIdentityPoolProviderX509 {

}
```


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

&datagoogleiamworkloadidentitypoolprovider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore {

}
```


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

&datagoogleiamworkloadidentitypoolprovider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas {

}
```


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

&datagoogleiamworkloadidentitypoolprovider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamWorkloadIdentityPoolProviderAwsList <a name="DataGoogleIamWorkloadIdentityPoolProviderAwsList" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.NewDataGoogleIamWorkloadIdentityPoolProviderAwsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleIamWorkloadIdentityPoolProviderAwsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.get"></a>

```go
func Get(index *f64) DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.NewDataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws">DataGoogleIamWorkloadIdentityPoolProviderAws</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleIamWorkloadIdentityPoolProviderAws
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws">DataGoogleIamWorkloadIdentityPoolProviderAws</a>

---


### DataGoogleIamWorkloadIdentityPoolProviderOidcList <a name="DataGoogleIamWorkloadIdentityPoolProviderOidcList" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.NewDataGoogleIamWorkloadIdentityPoolProviderOidcList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleIamWorkloadIdentityPoolProviderOidcList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.get"></a>

```go
func Get(index *f64) DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.NewDataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences">AllowedAudiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri">IssuerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJson">JwksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc">DataGoogleIamWorkloadIdentityPoolProviderOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences"></a>

```go
func AllowedAudiences() *[]*string
```

- *Type:* *[]*string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri"></a>

```go
func IssuerUri() *string
```

- *Type:* *string

---

##### `JwksJson`<sup>Required</sup> <a name="JwksJson" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJson"></a>

```go
func JwksJson() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleIamWorkloadIdentityPoolProviderOidc
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc">DataGoogleIamWorkloadIdentityPoolProviderOidc</a>

---


### DataGoogleIamWorkloadIdentityPoolProviderSamlList <a name="DataGoogleIamWorkloadIdentityPoolProviderSamlList" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.NewDataGoogleIamWorkloadIdentityPoolProviderSamlList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleIamWorkloadIdentityPoolProviderSamlList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.get"></a>

```go
func Get(index *f64) DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.NewDataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.property.idpMetadataXml">IdpMetadataXml</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSaml">DataGoogleIamWorkloadIdentityPoolProviderSaml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdpMetadataXml`<sup>Required</sup> <a name="IdpMetadataXml" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.property.idpMetadataXml"></a>

```go
func IdpMetadataXml() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleIamWorkloadIdentityPoolProviderSaml
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSaml">DataGoogleIamWorkloadIdentityPoolProviderSaml</a>

---


### DataGoogleIamWorkloadIdentityPoolProviderX509List <a name="DataGoogleIamWorkloadIdentityPoolProviderX509List" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.NewDataGoogleIamWorkloadIdentityPoolProviderX509List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleIamWorkloadIdentityPoolProviderX509List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.get"></a>

```go
func Get(index *f64) DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.NewDataGoogleIamWorkloadIdentityPoolProviderX509OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.property.trustStore">TrustStore</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509">DataGoogleIamWorkloadIdentityPoolProviderX509</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TrustStore`<sup>Required</sup> <a name="TrustStore" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.property.trustStore"></a>

```go
func TrustStore() DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleIamWorkloadIdentityPoolProviderX509
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509">DataGoogleIamWorkloadIdentityPoolProviderX509</a>

---


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.NewDataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.get"></a>

```go
func Get(index *f64) DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.NewDataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.pemCertificate">PemCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PemCertificate`<sup>Required</sup> <a name="PemCertificate" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.pemCertificate"></a>

```go
func PemCertificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>

---


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.NewDataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.get"></a>

```go
func Get(index *f64) DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.NewDataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.intermediateCas">IntermediateCas</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.trustAnchors">TrustAnchors</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntermediateCas`<sup>Required</sup> <a name="IntermediateCas" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.intermediateCas"></a>

```go
func IntermediateCas() DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList</a>

---

##### `TrustAnchors`<sup>Required</sup> <a name="TrustAnchors" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.trustAnchors"></a>

```go
func TrustAnchors() DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore</a>

---


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.NewDataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.get"></a>

```go
func Get(index *f64) DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleiamworkloadidentitypoolprovider"

datagoogleiamworkloadidentitypoolprovider.NewDataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.pemCertificate">PemCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PemCertificate`<sup>Required</sup> <a name="PemCertificate" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.pemCertificate"></a>

```go
func PemCertificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>

---



