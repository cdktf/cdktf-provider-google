# `kmsCryptoKeyVersion` Submodule <a name="`kmsCryptoKeyVersion` Submodule" id="@cdktf/provider-google.kmsCryptoKeyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsCryptoKeyVersion <a name="KmsCryptoKeyVersion" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/kms_crypto_key_version google_kms_crypto_key_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.Initializer"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

new kmsCryptoKeyVersion.KmsCryptoKeyVersion(scope: Construct, id: string, config: KmsCryptoKeyVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig">KmsCryptoKeyVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig">KmsCryptoKeyVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.putExternalProtectionLevelOptions">putExternalProtectionLevelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetExternalProtectionLevelOptions">resetExternalProtectionLevelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalProtectionLevelOptions` <a name="putExternalProtectionLevelOptions" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.putExternalProtectionLevelOptions"></a>

```typescript
public putExternalProtectionLevelOptions(value: KmsCryptoKeyVersionExternalProtectionLevelOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.putExternalProtectionLevelOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions">KmsCryptoKeyVersionExternalProtectionLevelOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: KmsCryptoKeyVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts">KmsCryptoKeyVersionTimeouts</a>

---

##### `resetExternalProtectionLevelOptions` <a name="resetExternalProtectionLevelOptions" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetExternalProtectionLevelOptions"></a>

```typescript
public resetExternalProtectionLevelOptions(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KmsCryptoKeyVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isConstruct"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

kmsCryptoKeyVersion.KmsCryptoKeyVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isTerraformElement"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

kmsCryptoKeyVersion.KmsCryptoKeyVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isTerraformResource"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

kmsCryptoKeyVersion.KmsCryptoKeyVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.generateConfigForImport"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

kmsCryptoKeyVersion.KmsCryptoKeyVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KmsCryptoKeyVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmsCryptoKeyVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmsCryptoKeyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/kms_crypto_key_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsCryptoKeyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList">KmsCryptoKeyVersionAttestationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.externalProtectionLevelOptions">externalProtectionLevelOptions</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference">KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.generateTime">generateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.protectionLevel">protectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference">KmsCryptoKeyVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.cryptoKeyInput">cryptoKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.externalProtectionLevelOptionsInput">externalProtectionLevelOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions">KmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts">KmsCryptoKeyVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.cryptoKey">cryptoKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.attestation"></a>

```typescript
public readonly attestation: KmsCryptoKeyVersionAttestationList;
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList">KmsCryptoKeyVersionAttestationList</a>

---

##### `externalProtectionLevelOptions`<sup>Required</sup> <a name="externalProtectionLevelOptions" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.externalProtectionLevelOptions"></a>

```typescript
public readonly externalProtectionLevelOptions: KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference">KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference</a>

---

##### `generateTime`<sup>Required</sup> <a name="generateTime" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.generateTime"></a>

```typescript
public readonly generateTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.protectionLevel"></a>

```typescript
public readonly protectionLevel: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.timeouts"></a>

```typescript
public readonly timeouts: KmsCryptoKeyVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference">KmsCryptoKeyVersionTimeoutsOutputReference</a>

---

##### `cryptoKeyInput`<sup>Optional</sup> <a name="cryptoKeyInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.cryptoKeyInput"></a>

```typescript
public readonly cryptoKeyInput: string;
```

- *Type:* string

---

##### `externalProtectionLevelOptionsInput`<sup>Optional</sup> <a name="externalProtectionLevelOptionsInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.externalProtectionLevelOptionsInput"></a>

```typescript
public readonly externalProtectionLevelOptionsInput: KmsCryptoKeyVersionExternalProtectionLevelOptions;
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions">KmsCryptoKeyVersionExternalProtectionLevelOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KmsCryptoKeyVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts">KmsCryptoKeyVersionTimeouts</a>

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.cryptoKey"></a>

```typescript
public readonly cryptoKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsCryptoKeyVersionAttestation <a name="KmsCryptoKeyVersionAttestation" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestation.Initializer"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

const kmsCryptoKeyVersionAttestation: kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestation = { ... }
```


### KmsCryptoKeyVersionAttestationCertChains <a name="KmsCryptoKeyVersionAttestationCertChains" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChains.Initializer"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

const kmsCryptoKeyVersionAttestationCertChains: kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChains = { ... }
```


### KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions <a name="KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions.Initializer"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

const kmsCryptoKeyVersionAttestationExternalProtectionLevelOptions: kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions = { ... }
```


### KmsCryptoKeyVersionConfig <a name="KmsCryptoKeyVersionConfig" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.Initializer"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

const kmsCryptoKeyVersionConfig: kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.cryptoKey">cryptoKey</a></code> | <code>string</code> | The name of the cryptoKey associated with the CryptoKeyVersions. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.externalProtectionLevelOptions">externalProtectionLevelOptions</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions">KmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | external_protection_level_options block. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/kms_crypto_key_version#id KmsCryptoKeyVersion#id}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.state">state</a></code> | <code>string</code> | The current state of the CryptoKeyVersion. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts">KmsCryptoKeyVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.cryptoKey"></a>

```typescript
public readonly cryptoKey: string;
```

- *Type:* string

The name of the cryptoKey associated with the CryptoKeyVersions. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyring}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/kms_crypto_key_version#crypto_key KmsCryptoKeyVersion#crypto_key}

---

##### `externalProtectionLevelOptions`<sup>Optional</sup> <a name="externalProtectionLevelOptions" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.externalProtectionLevelOptions"></a>

```typescript
public readonly externalProtectionLevelOptions: KmsCryptoKeyVersionExternalProtectionLevelOptions;
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions">KmsCryptoKeyVersionExternalProtectionLevelOptions</a>

external_protection_level_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/kms_crypto_key_version#external_protection_level_options KmsCryptoKeyVersion#external_protection_level_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/kms_crypto_key_version#id KmsCryptoKeyVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The current state of the CryptoKeyVersion.

Note: you can only specify this field to manually 'ENABLE' or 'DISABLE' the CryptoKeyVersion,
otherwise the value of this field is always retrieved automatically. Possible values: ["PENDING_GENERATION", "ENABLED", "DISABLED", "DESTROYED", "DESTROY_SCHEDULED", "PENDING_IMPORT", "IMPORT_FAILED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/kms_crypto_key_version#state KmsCryptoKeyVersion#state}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KmsCryptoKeyVersionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts">KmsCryptoKeyVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/kms_crypto_key_version#timeouts KmsCryptoKeyVersion#timeouts}

---

### KmsCryptoKeyVersionExternalProtectionLevelOptions <a name="KmsCryptoKeyVersionExternalProtectionLevelOptions" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions.Initializer"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

const kmsCryptoKeyVersionExternalProtectionLevelOptions: kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions.property.ekmConnectionKeyPath">ekmConnectionKeyPath</a></code> | <code>string</code> | The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions.property.externalKeyUri">externalKeyUri</a></code> | <code>string</code> | The URI for an external resource that this CryptoKeyVersion represents. |

---

##### `ekmConnectionKeyPath`<sup>Optional</sup> <a name="ekmConnectionKeyPath" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions.property.ekmConnectionKeyPath"></a>

```typescript
public readonly ekmConnectionKeyPath: string;
```

- *Type:* string

The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of externalKeyUri when using an EkmConnection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/kms_crypto_key_version#ekm_connection_key_path KmsCryptoKeyVersion#ekm_connection_key_path}

---

##### `externalKeyUri`<sup>Optional</sup> <a name="externalKeyUri" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions.property.externalKeyUri"></a>

```typescript
public readonly externalKeyUri: string;
```

- *Type:* string

The URI for an external resource that this CryptoKeyVersion represents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/kms_crypto_key_version#external_key_uri KmsCryptoKeyVersion#external_key_uri}

---

### KmsCryptoKeyVersionTimeouts <a name="KmsCryptoKeyVersionTimeouts" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts.Initializer"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

const kmsCryptoKeyVersionTimeouts: kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/kms_crypto_key_version#create KmsCryptoKeyVersion#create}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/kms_crypto_key_version#delete KmsCryptoKeyVersion#delete}. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/kms_crypto_key_version#update KmsCryptoKeyVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/kms_crypto_key_version#create KmsCryptoKeyVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/kms_crypto_key_version#delete KmsCryptoKeyVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/kms_crypto_key_version#update KmsCryptoKeyVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsCryptoKeyVersionAttestationCertChainsList <a name="KmsCryptoKeyVersionAttestationCertChainsList" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.Initializer"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

new kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.get"></a>

```typescript
public get(index: number): KmsCryptoKeyVersionAttestationCertChainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### KmsCryptoKeyVersionAttestationCertChainsOutputReference <a name="KmsCryptoKeyVersionAttestationCertChainsOutputReference" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

new kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.caviumCerts">caviumCerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googleCardCerts">googleCardCerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googlePartitionCerts">googlePartitionCerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChains">KmsCryptoKeyVersionAttestationCertChains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caviumCerts`<sup>Required</sup> <a name="caviumCerts" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.caviumCerts"></a>

```typescript
public readonly caviumCerts: string[];
```

- *Type:* string[]

---

##### `googleCardCerts`<sup>Required</sup> <a name="googleCardCerts" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googleCardCerts"></a>

```typescript
public readonly googleCardCerts: string[];
```

- *Type:* string[]

---

##### `googlePartitionCerts`<sup>Required</sup> <a name="googlePartitionCerts" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.googlePartitionCerts"></a>

```typescript
public readonly googlePartitionCerts: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KmsCryptoKeyVersionAttestationCertChains;
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChains">KmsCryptoKeyVersionAttestationCertChains</a>

---


### KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList <a name="KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

new kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.get"></a>

```typescript
public get(index: number): KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference <a name="KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

new kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath">ekmConnectionKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.externalKeyUri">externalKeyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions">KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ekmConnectionKeyPath`<sup>Required</sup> <a name="ekmConnectionKeyPath" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath"></a>

```typescript
public readonly ekmConnectionKeyPath: string;
```

- *Type:* string

---

##### `externalKeyUri`<sup>Required</sup> <a name="externalKeyUri" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.externalKeyUri"></a>

```typescript
public readonly externalKeyUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions;
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions">KmsCryptoKeyVersionAttestationExternalProtectionLevelOptions</a>

---


### KmsCryptoKeyVersionAttestationList <a name="KmsCryptoKeyVersionAttestationList" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.Initializer"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

new kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.get"></a>

```typescript
public get(index: number): KmsCryptoKeyVersionAttestationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### KmsCryptoKeyVersionAttestationOutputReference <a name="KmsCryptoKeyVersionAttestationOutputReference" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

new kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.certChains">certChains</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList">KmsCryptoKeyVersionAttestationCertChainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.externalProtectionLevelOptions">externalProtectionLevelOptions</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList">KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestation">KmsCryptoKeyVersionAttestation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certChains`<sup>Required</sup> <a name="certChains" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.certChains"></a>

```typescript
public readonly certChains: KmsCryptoKeyVersionAttestationCertChainsList;
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationCertChainsList">KmsCryptoKeyVersionAttestationCertChainsList</a>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `externalProtectionLevelOptions`<sup>Required</sup> <a name="externalProtectionLevelOptions" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.externalProtectionLevelOptions"></a>

```typescript
public readonly externalProtectionLevelOptions: KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList">KmsCryptoKeyVersionAttestationExternalProtectionLevelOptionsList</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KmsCryptoKeyVersionAttestation;
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionAttestation">KmsCryptoKeyVersionAttestation</a>

---


### KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference <a name="KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

new kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetEkmConnectionKeyPath">resetEkmConnectionKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetExternalKeyUri">resetExternalKeyUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEkmConnectionKeyPath` <a name="resetEkmConnectionKeyPath" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetEkmConnectionKeyPath"></a>

```typescript
public resetEkmConnectionKeyPath(): void
```

##### `resetExternalKeyUri` <a name="resetExternalKeyUri" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.resetExternalKeyUri"></a>

```typescript
public resetExternalKeyUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPathInput">ekmConnectionKeyPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUriInput">externalKeyUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath">ekmConnectionKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUri">externalKeyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions">KmsCryptoKeyVersionExternalProtectionLevelOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ekmConnectionKeyPathInput`<sup>Optional</sup> <a name="ekmConnectionKeyPathInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPathInput"></a>

```typescript
public readonly ekmConnectionKeyPathInput: string;
```

- *Type:* string

---

##### `externalKeyUriInput`<sup>Optional</sup> <a name="externalKeyUriInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUriInput"></a>

```typescript
public readonly externalKeyUriInput: string;
```

- *Type:* string

---

##### `ekmConnectionKeyPath`<sup>Required</sup> <a name="ekmConnectionKeyPath" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.ekmConnectionKeyPath"></a>

```typescript
public readonly ekmConnectionKeyPath: string;
```

- *Type:* string

---

##### `externalKeyUri`<sup>Required</sup> <a name="externalKeyUri" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.externalKeyUri"></a>

```typescript
public readonly externalKeyUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KmsCryptoKeyVersionExternalProtectionLevelOptions;
```

- *Type:* <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionExternalProtectionLevelOptions">KmsCryptoKeyVersionExternalProtectionLevelOptions</a>

---


### KmsCryptoKeyVersionTimeoutsOutputReference <a name="KmsCryptoKeyVersionTimeoutsOutputReference" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { kmsCryptoKeyVersion } from '@cdktf/provider-google'

new kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts">KmsCryptoKeyVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KmsCryptoKeyVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.kmsCryptoKeyVersion.KmsCryptoKeyVersionTimeouts">KmsCryptoKeyVersionTimeouts</a>

---



