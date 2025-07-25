# `dataGoogleVmwareengineExternalAddress` Submodule <a name="`dataGoogleVmwareengineExternalAddress` Submodule" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineExternalAddress <a name="DataGoogleVmwareengineExternalAddress" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/vmwareengine_external_address google_vmwareengine_external_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.Initializer"></a>

```typescript
import { dataGoogleVmwareengineExternalAddress } from '@cdktf/provider-google'

new dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress(scope: Construct, id: string, config: DataGoogleVmwareengineExternalAddressConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig">DataGoogleVmwareengineExternalAddressConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig">DataGoogleVmwareengineExternalAddressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVmwareengineExternalAddress resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isConstruct"></a>

```typescript
import { dataGoogleVmwareengineExternalAddress } from '@cdktf/provider-google'

dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isTerraformElement"></a>

```typescript
import { dataGoogleVmwareengineExternalAddress } from '@cdktf/provider-google'

dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isTerraformDataSource"></a>

```typescript
import { dataGoogleVmwareengineExternalAddress } from '@cdktf/provider-google'

dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.generateConfigForImport"></a>

```typescript
import { dataGoogleVmwareengineExternalAddress } from '@cdktf/provider-google'

dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleVmwareengineExternalAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVmwareengineExternalAddress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVmwareengineExternalAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/vmwareengine_external_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineExternalAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.externalIp">externalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.internalIp">internalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.externalIp"></a>

```typescript
public readonly externalIp: string;
```

- *Type:* string

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.internalIp"></a>

```typescript
public readonly internalIp: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddress.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineExternalAddressConfig <a name="DataGoogleVmwareengineExternalAddressConfig" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.Initializer"></a>

```typescript
import { dataGoogleVmwareengineExternalAddress } from '@cdktf/provider-google'

const dataGoogleVmwareengineExternalAddressConfig: dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.name">name</a></code> | <code>string</code> | The ID of the external IP Address. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.parent">parent</a></code> | <code>string</code> | The resource name of the private cloud to create a new external address in. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/vmwareengine_external_address#id DataGoogleVmwareengineExternalAddress#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The ID of the external IP Address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/vmwareengine_external_address#name DataGoogleVmwareengineExternalAddress#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The resource name of the private cloud to create a new external address in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/vmwareengine_external_address#parent DataGoogleVmwareengineExternalAddress#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleVmwareengineExternalAddress.DataGoogleVmwareengineExternalAddressConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/vmwareengine_external_address#id DataGoogleVmwareengineExternalAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



