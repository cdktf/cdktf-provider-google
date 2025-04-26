# `firebaseAppCheckAppAttestConfig` Submodule <a name="`firebaseAppCheckAppAttestConfig` Submodule" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppCheckAppAttestConfig <a name="FirebaseAppCheckAppAttestConfig" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_app_check_app_attest_config google_firebase_app_check_app_attest_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer"></a>

```typescript
import { firebaseAppCheckAppAttestConfig } from '@cdktf/provider-google'

new firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig(scope: Construct, id: string, config: FirebaseAppCheckAppAttestConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig">FirebaseAppCheckAppAttestConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig">FirebaseAppCheckAppAttestConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: FirebaseAppCheckAppAttestConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts">FirebaseAppCheckAppAttestConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FirebaseAppCheckAppAttestConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isConstruct"></a>

```typescript
import { firebaseAppCheckAppAttestConfig } from '@cdktf/provider-google'

firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isTerraformElement"></a>

```typescript
import { firebaseAppCheckAppAttestConfig } from '@cdktf/provider-google'

firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isTerraformResource"></a>

```typescript
import { firebaseAppCheckAppAttestConfig } from '@cdktf/provider-google'

firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.generateConfigForImport"></a>

```typescript
import { firebaseAppCheckAppAttestConfig } from '@cdktf/provider-google'

firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FirebaseAppCheckAppAttestConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirebaseAppCheckAppAttestConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirebaseAppCheckAppAttestConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_app_check_app_attest_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppCheckAppAttestConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference">FirebaseAppCheckAppAttestConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts">FirebaseAppCheckAppAttestConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.tokenTtlInput">tokenTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.tokenTtl">tokenTtl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FirebaseAppCheckAppAttestConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference">FirebaseAppCheckAppAttestConfigTimeoutsOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FirebaseAppCheckAppAttestConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts">FirebaseAppCheckAppAttestConfigTimeouts</a>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppCheckAppAttestConfigConfig <a name="FirebaseAppCheckAppAttestConfigConfig" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.Initializer"></a>

```typescript
import { firebaseAppCheckAppAttestConfig } from '@cdktf/provider-google'

const firebaseAppCheckAppAttestConfigConfig: firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.appId">appId</a></code> | <code>string</code> | The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_app_check_app_attest_config#id FirebaseAppCheckAppAttestConfig#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_app_check_app_attest_config#project FirebaseAppCheckAppAttestConfig#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts">FirebaseAppCheckAppAttestConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.tokenTtl">tokenTtl</a></code> | <code>string</code> | Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The ID of an [Apple App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.iosApps#IosApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_app_check_app_attest_config#app_id FirebaseAppCheckAppAttestConfig#app_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_app_check_app_attest_config#id FirebaseAppCheckAppAttestConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_app_check_app_attest_config#project FirebaseAppCheckAppAttestConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FirebaseAppCheckAppAttestConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts">FirebaseAppCheckAppAttestConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_app_check_app_attest_config#timeouts FirebaseAppCheckAppAttestConfig#timeouts}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: string;
```

- *Type:* string

Specifies the duration for which App Check tokens exchanged from App Attest artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_app_check_app_attest_config#token_ttl FirebaseAppCheckAppAttestConfig#token_ttl}

---

### FirebaseAppCheckAppAttestConfigTimeouts <a name="FirebaseAppCheckAppAttestConfigTimeouts" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts.Initializer"></a>

```typescript
import { firebaseAppCheckAppAttestConfig } from '@cdktf/provider-google'

const firebaseAppCheckAppAttestConfigTimeouts: firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_app_check_app_attest_config#create FirebaseAppCheckAppAttestConfig#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_app_check_app_attest_config#delete FirebaseAppCheckAppAttestConfig#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_app_check_app_attest_config#update FirebaseAppCheckAppAttestConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_app_check_app_attest_config#create FirebaseAppCheckAppAttestConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_app_check_app_attest_config#delete FirebaseAppCheckAppAttestConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/firebase_app_check_app_attest_config#update FirebaseAppCheckAppAttestConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppCheckAppAttestConfigTimeoutsOutputReference <a name="FirebaseAppCheckAppAttestConfigTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { firebaseAppCheckAppAttestConfig } from '@cdktf/provider-google'

new firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts">FirebaseAppCheckAppAttestConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirebaseAppCheckAppAttestConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.firebaseAppCheckAppAttestConfig.FirebaseAppCheckAppAttestConfigTimeouts">FirebaseAppCheckAppAttestConfigTimeouts</a>

---



