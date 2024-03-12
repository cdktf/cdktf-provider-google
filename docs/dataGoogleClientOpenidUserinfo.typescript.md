# `dataGoogleClientOpenidUserinfo` Submodule <a name="`dataGoogleClientOpenidUserinfo` Submodule" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleClientOpenidUserinfo <a name="DataGoogleClientOpenidUserinfo" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/client_openid_userinfo google_client_openid_userinfo}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.Initializer"></a>

```typescript
import { dataGoogleClientOpenidUserinfo } from '@cdktf/provider-google'

new dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo(scope: Construct, id: string, config?: DataGoogleClientOpenidUserinfoConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig">DataGoogleClientOpenidUserinfoConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig">DataGoogleClientOpenidUserinfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleClientOpenidUserinfo resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.isConstruct"></a>

```typescript
import { dataGoogleClientOpenidUserinfo } from '@cdktf/provider-google'

dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.isTerraformElement"></a>

```typescript
import { dataGoogleClientOpenidUserinfo } from '@cdktf/provider-google'

dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.isTerraformDataSource"></a>

```typescript
import { dataGoogleClientOpenidUserinfo } from '@cdktf/provider-google'

dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.generateConfigForImport"></a>

```typescript
import { dataGoogleClientOpenidUserinfo } from '@cdktf/provider-google'

dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleClientOpenidUserinfo resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleClientOpenidUserinfo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleClientOpenidUserinfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/data-sources/client_openid_userinfo#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleClientOpenidUserinfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfo.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleClientOpenidUserinfoConfig <a name="DataGoogleClientOpenidUserinfoConfig" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig.Initializer"></a>

```typescript
import { dataGoogleClientOpenidUserinfo } from '@cdktf/provider-google'

const dataGoogleClientOpenidUserinfoConfig: dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleClientOpenidUserinfo.DataGoogleClientOpenidUserinfoConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---



