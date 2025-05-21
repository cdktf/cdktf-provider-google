# `dataGoogleIamWorkloadIdentityPoolProvider` Submodule <a name="`dataGoogleIamWorkloadIdentityPoolProvider` Submodule" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPoolProvider <a name="DataGoogleIamWorkloadIdentityPoolProvider" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/iam_workload_identity_pool_provider google_iam_workload_identity_pool_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider(scope: Construct, id: string, config: DataGoogleIamWorkloadIdentityPoolProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig">DataGoogleIamWorkloadIdentityPoolProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig">DataGoogleIamWorkloadIdentityPoolProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleIamWorkloadIdentityPoolProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isConstruct"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformElement"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformDataSource"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.generateConfigForImport"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleIamWorkloadIdentityPoolProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPoolProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleIamWorkloadIdentityPoolProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/iam_workload_identity_pool_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPoolProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.attributeCondition">attributeCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.attributeMapping">attributeMapping</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList">DataGoogleIamWorkloadIdentityPoolProviderAwsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList">DataGoogleIamWorkloadIdentityPoolProviderOidcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList">DataGoogleIamWorkloadIdentityPoolProviderSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.x509">x509</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List">DataGoogleIamWorkloadIdentityPoolProviderX509List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput">workloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput">workloadIdentityPoolProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId">workloadIdentityPoolProviderId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `attributeCondition`<sup>Required</sup> <a name="attributeCondition" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.attributeCondition"></a>

```typescript
public readonly attributeCondition: string;
```

- *Type:* string

---

##### `attributeMapping`<sup>Required</sup> <a name="attributeMapping" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.attributeMapping"></a>

```typescript
public readonly attributeMapping: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.aws"></a>

```typescript
public readonly aws: DataGoogleIamWorkloadIdentityPoolProviderAwsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList">DataGoogleIamWorkloadIdentityPoolProviderAwsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.disabled"></a>

```typescript
public readonly disabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.oidc"></a>

```typescript
public readonly oidc: DataGoogleIamWorkloadIdentityPoolProviderOidcList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList">DataGoogleIamWorkloadIdentityPoolProviderOidcList</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.saml"></a>

```typescript
public readonly saml: DataGoogleIamWorkloadIdentityPoolProviderSamlList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList">DataGoogleIamWorkloadIdentityPoolProviderSamlList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `x509`<sup>Required</sup> <a name="x509" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.x509"></a>

```typescript
public readonly x509: DataGoogleIamWorkloadIdentityPoolProviderX509List;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List">DataGoogleIamWorkloadIdentityPoolProviderX509List</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `workloadIdentityPoolIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolIdInput" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput"></a>

```typescript
public readonly workloadIdentityPoolIdInput: string;
```

- *Type:* string

---

##### `workloadIdentityPoolProviderIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolProviderIdInput" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput"></a>

```typescript
public readonly workloadIdentityPoolProviderIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

---

##### `workloadIdentityPoolProviderId`<sup>Required</sup> <a name="workloadIdentityPoolProviderId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId"></a>

```typescript
public readonly workloadIdentityPoolProviderId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolProviderAws <a name="DataGoogleIamWorkloadIdentityPoolProviderAws" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

const dataGoogleIamWorkloadIdentityPoolProviderAws: dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws = { ... }
```


### DataGoogleIamWorkloadIdentityPoolProviderConfig <a name="DataGoogleIamWorkloadIdentityPoolProviderConfig" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

const dataGoogleIamWorkloadIdentityPoolProviderConfig: dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | The ID used for the pool, which is the final component of the pool resource name. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId">workloadIdentityPoolProviderId</a></code> | <code>string</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/iam_workload_identity_pool_provider#id DataGoogleIamWorkloadIdentityPoolProvider#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/iam_workload_identity_pool_provider#project DataGoogleIamWorkloadIdentityPoolProvider#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

The ID used for the pool, which is the final component of the pool resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/iam_workload_identity_pool_provider#workload_identity_pool_id DataGoogleIamWorkloadIdentityPoolProvider#workload_identity_pool_id}

---

##### `workloadIdentityPoolProviderId`<sup>Required</sup> <a name="workloadIdentityPoolProviderId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId"></a>

```typescript
public readonly workloadIdentityPoolProviderId: string;
```

- *Type:* string

The ID for the provider, which becomes the final component of the resource name.

This
value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/iam_workload_identity_pool_provider#workload_identity_pool_provider_id DataGoogleIamWorkloadIdentityPoolProvider#workload_identity_pool_provider_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/iam_workload_identity_pool_provider#id DataGoogleIamWorkloadIdentityPoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/data-sources/iam_workload_identity_pool_provider#project DataGoogleIamWorkloadIdentityPoolProvider#project}.

---

### DataGoogleIamWorkloadIdentityPoolProviderOidc <a name="DataGoogleIamWorkloadIdentityPoolProviderOidc" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

const dataGoogleIamWorkloadIdentityPoolProviderOidc: dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc = { ... }
```


### DataGoogleIamWorkloadIdentityPoolProviderSaml <a name="DataGoogleIamWorkloadIdentityPoolProviderSaml" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSaml.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

const dataGoogleIamWorkloadIdentityPoolProviderSaml: dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSaml = { ... }
```


### DataGoogleIamWorkloadIdentityPoolProviderX509 <a name="DataGoogleIamWorkloadIdentityPoolProviderX509" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

const dataGoogleIamWorkloadIdentityPoolProviderX509: dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509 = { ... }
```


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

const dataGoogleIamWorkloadIdentityPoolProviderX509TrustStore: dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore = { ... }
```


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

const dataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas: dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas = { ... }
```


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

const dataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors: dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamWorkloadIdentityPoolProviderAwsList <a name="DataGoogleIamWorkloadIdentityPoolProviderAwsList" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.get"></a>

```typescript
public get(index: number): DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws">DataGoogleIamWorkloadIdentityPoolProviderAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleIamWorkloadIdentityPoolProviderAws;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws">DataGoogleIamWorkloadIdentityPoolProviderAws</a>

---


### DataGoogleIamWorkloadIdentityPoolProviderOidcList <a name="DataGoogleIamWorkloadIdentityPoolProviderOidcList" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.get"></a>

```typescript
public get(index: number): DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri">issuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJson">jwksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc">DataGoogleIamWorkloadIdentityPoolProviderOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJson"></a>

```typescript
public readonly jwksJson: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleIamWorkloadIdentityPoolProviderOidc;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc">DataGoogleIamWorkloadIdentityPoolProviderOidc</a>

---


### DataGoogleIamWorkloadIdentityPoolProviderSamlList <a name="DataGoogleIamWorkloadIdentityPoolProviderSamlList" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.get"></a>

```typescript
public get(index: number): DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.property.idpMetadataXml">idpMetadataXml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSaml">DataGoogleIamWorkloadIdentityPoolProviderSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idpMetadataXml`<sup>Required</sup> <a name="idpMetadataXml" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.property.idpMetadataXml"></a>

```typescript
public readonly idpMetadataXml: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSamlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleIamWorkloadIdentityPoolProviderSaml;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderSaml">DataGoogleIamWorkloadIdentityPoolProviderSaml</a>

---


### DataGoogleIamWorkloadIdentityPoolProviderX509List <a name="DataGoogleIamWorkloadIdentityPoolProviderX509List" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.get"></a>

```typescript
public get(index: number): DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.property.trustStore">trustStore</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509">DataGoogleIamWorkloadIdentityPoolProviderX509</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trustStore`<sup>Required</sup> <a name="trustStore" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.property.trustStore"></a>

```typescript
public readonly trustStore: DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleIamWorkloadIdentityPoolProviderX509;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509">DataGoogleIamWorkloadIdentityPoolProviderX509</a>

---


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.get"></a>

```typescript
public get(index: number): DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.pemCertificate"></a>

```typescript
public readonly pemCertificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas</a>

---


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.get"></a>

```typescript
public get(index: number): DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.intermediateCas">intermediateCas</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.trustAnchors">trustAnchors</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intermediateCas`<sup>Required</sup> <a name="intermediateCas" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.intermediateCas"></a>

```typescript
public readonly intermediateCas: DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList</a>

---

##### `trustAnchors`<sup>Required</sup> <a name="trustAnchors" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.trustAnchors"></a>

```typescript
public readonly trustAnchors: DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStore</a>

---


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.get"></a>

```typescript
public get(index: number): DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.pemCertificate">pemCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pemCertificate`<sup>Required</sup> <a name="pemCertificate" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.pemCertificate"></a>

```typescript
public readonly pemCertificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors">DataGoogleIamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors</a>

---



