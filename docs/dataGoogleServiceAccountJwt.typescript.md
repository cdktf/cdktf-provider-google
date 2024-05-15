# `dataGoogleServiceAccountJwt` Submodule <a name="`dataGoogleServiceAccountJwt` Submodule" id="@cdktf/provider-google.dataGoogleServiceAccountJwt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleServiceAccountJwt <a name="DataGoogleServiceAccountJwt" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/data-sources/service_account_jwt google_service_account_jwt}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer"></a>

```typescript
import { dataGoogleServiceAccountJwt } from '@cdktf/provider-google'

new dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt(scope: Construct, id: string, config: DataGoogleServiceAccountJwtConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig">DataGoogleServiceAccountJwtConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig">DataGoogleServiceAccountJwtConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetDelegates">resetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetExpiresIn">resetExpiresIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDelegates` <a name="resetDelegates" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetDelegates"></a>

```typescript
public resetDelegates(): void
```

##### `resetExpiresIn` <a name="resetExpiresIn" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetExpiresIn"></a>

```typescript
public resetExpiresIn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleServiceAccountJwt resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isConstruct"></a>

```typescript
import { dataGoogleServiceAccountJwt } from '@cdktf/provider-google'

dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformElement"></a>

```typescript
import { dataGoogleServiceAccountJwt } from '@cdktf/provider-google'

dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformDataSource"></a>

```typescript
import { dataGoogleServiceAccountJwt } from '@cdktf/provider-google'

dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport"></a>

```typescript
import { dataGoogleServiceAccountJwt } from '@cdktf/provider-google'

dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleServiceAccountJwt resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleServiceAccountJwt to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleServiceAccountJwt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/data-sources/service_account_jwt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleServiceAccountJwt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.jwt">jwt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.delegatesInput">delegatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.expiresInInput">expiresInInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.payloadInput">payloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.targetServiceAccountInput">targetServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.delegates">delegates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.expiresIn">expiresIn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.payload">payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.targetServiceAccount">targetServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.jwt"></a>

```typescript
public readonly jwt: string;
```

- *Type:* string

---

##### `delegatesInput`<sup>Optional</sup> <a name="delegatesInput" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.delegatesInput"></a>

```typescript
public readonly delegatesInput: string[];
```

- *Type:* string[]

---

##### `expiresInInput`<sup>Optional</sup> <a name="expiresInInput" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.expiresInInput"></a>

```typescript
public readonly expiresInInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.payloadInput"></a>

```typescript
public readonly payloadInput: string;
```

- *Type:* string

---

##### `targetServiceAccountInput`<sup>Optional</sup> <a name="targetServiceAccountInput" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.targetServiceAccountInput"></a>

```typescript
public readonly targetServiceAccountInput: string;
```

- *Type:* string

---

##### `delegates`<sup>Required</sup> <a name="delegates" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.delegates"></a>

```typescript
public readonly delegates: string[];
```

- *Type:* string[]

---

##### `expiresIn`<sup>Required</sup> <a name="expiresIn" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.expiresIn"></a>

```typescript
public readonly expiresIn: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.targetServiceAccount"></a>

```typescript
public readonly targetServiceAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleServiceAccountJwtConfig <a name="DataGoogleServiceAccountJwtConfig" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.Initializer"></a>

```typescript
import { dataGoogleServiceAccountJwt } from '@cdktf/provider-google'

const dataGoogleServiceAccountJwtConfig: dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.payload">payload</a></code> | <code>string</code> | A JSON-encoded JWT claims set that will be included in the signed JWT. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.targetServiceAccount">targetServiceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/data-sources/service_account_jwt#target_service_account DataGoogleServiceAccountJwt#target_service_account}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.delegates">delegates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/data-sources/service_account_jwt#delegates DataGoogleServiceAccountJwt#delegates}. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.expiresIn">expiresIn</a></code> | <code>number</code> | Number of seconds until the JWT expires. |
| <code><a href="#@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/data-sources/service_account_jwt#id DataGoogleServiceAccountJwt#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

A JSON-encoded JWT claims set that will be included in the signed JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/data-sources/service_account_jwt#payload DataGoogleServiceAccountJwt#payload}

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.targetServiceAccount"></a>

```typescript
public readonly targetServiceAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/data-sources/service_account_jwt#target_service_account DataGoogleServiceAccountJwt#target_service_account}.

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.delegates"></a>

```typescript
public readonly delegates: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/data-sources/service_account_jwt#delegates DataGoogleServiceAccountJwt#delegates}.

---

##### `expiresIn`<sup>Optional</sup> <a name="expiresIn" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.expiresIn"></a>

```typescript
public readonly expiresIn: number;
```

- *Type:* number

Number of seconds until the JWT expires.

If set and non-zero an `exp` claim will be added to the payload derived from the current timestamp plus expires_in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/data-sources/service_account_jwt#expires_in DataGoogleServiceAccountJwt#expires_in}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/data-sources/service_account_jwt#id DataGoogleServiceAccountJwt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



