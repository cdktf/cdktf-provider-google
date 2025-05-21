# `firebaseAppHostingDefaultDomain` Submodule <a name="`firebaseAppHostingDefaultDomain` Submodule" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppHostingDefaultDomain <a name="FirebaseAppHostingDefaultDomain" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain google_firebase_app_hosting_default_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer"></a>

```typescript
import { firebaseAppHostingDefaultDomain } from '@cdktf/provider-google'

new firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain(scope: Construct, id: string, config: FirebaseAppHostingDefaultDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig">FirebaseAppHostingDefaultDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig">FirebaseAppHostingDefaultDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: FirebaseAppHostingDefaultDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a>

---

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FirebaseAppHostingDefaultDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isConstruct"></a>

```typescript
import { firebaseAppHostingDefaultDomain } from '@cdktf/provider-google'

firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformElement"></a>

```typescript
import { firebaseAppHostingDefaultDomain } from '@cdktf/provider-google'

firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformResource"></a>

```typescript
import { firebaseAppHostingDefaultDomain } from '@cdktf/provider-google'

firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport"></a>

```typescript
import { firebaseAppHostingDefaultDomain } from '@cdktf/provider-google'

firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FirebaseAppHostingDefaultDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirebaseAppHostingDefaultDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirebaseAppHostingDefaultDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppHostingDefaultDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference">FirebaseAppHostingDefaultDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.timeouts"></a>

```typescript
public readonly timeouts: FirebaseAppHostingDefaultDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference">FirebaseAppHostingDefaultDomainTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FirebaseAppHostingDefaultDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppHostingDefaultDomainConfig <a name="FirebaseAppHostingDefaultDomainConfig" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.Initializer"></a>

```typescript
import { firebaseAppHostingDefaultDomain } from '@cdktf/provider-google'

const firebaseAppHostingDefaultDomainConfig: firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.backend">backend</a></code> | <code>string</code> | The ID of the Backend that this Domain is associated with. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.domainId">domainId</a></code> | <code>string</code> | Id of the domain. For default domain, it should be {{backend}}--{{project_id}}.{{location}}.hosted.app. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.location">location</a></code> | <code>string</code> | The location of the Backend that this Domain is associated with. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the domain is disabled. Defaults to false. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain#id FirebaseAppHostingDefaultDomain#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain#project FirebaseAppHostingDefaultDomain#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The ID of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain#backend FirebaseAppHostingDefaultDomain#backend}

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Id of the domain. For default domain, it should be {{backend}}--{{project_id}}.{{location}}.hosted.app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain#domain_id FirebaseAppHostingDefaultDomain#domain_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the Backend that this Domain is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain#location FirebaseAppHostingDefaultDomain#location}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the domain is disabled. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain#disabled FirebaseAppHostingDefaultDomain#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain#id FirebaseAppHostingDefaultDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain#project FirebaseAppHostingDefaultDomain#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FirebaseAppHostingDefaultDomainTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain#timeouts FirebaseAppHostingDefaultDomain#timeouts}

---

### FirebaseAppHostingDefaultDomainTimeouts <a name="FirebaseAppHostingDefaultDomainTimeouts" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.Initializer"></a>

```typescript
import { firebaseAppHostingDefaultDomain } from '@cdktf/provider-google'

const firebaseAppHostingDefaultDomainTimeouts: firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain#create FirebaseAppHostingDefaultDomain#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain#delete FirebaseAppHostingDefaultDomain#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain#update FirebaseAppHostingDefaultDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain#create FirebaseAppHostingDefaultDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain#delete FirebaseAppHostingDefaultDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/firebase_app_hosting_default_domain#update FirebaseAppHostingDefaultDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppHostingDefaultDomainTimeoutsOutputReference <a name="FirebaseAppHostingDefaultDomainTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { firebaseAppHostingDefaultDomain } from '@cdktf/provider-google'

new firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirebaseAppHostingDefaultDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.firebaseAppHostingDefaultDomain.FirebaseAppHostingDefaultDomainTimeouts">FirebaseAppHostingDefaultDomainTimeouts</a>

---



