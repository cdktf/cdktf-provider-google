# `activeDirectoryDomainTrust` Submodule <a name="`activeDirectoryDomainTrust` Submodule" id="@cdktf/provider-google.activeDirectoryDomainTrust"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActiveDirectoryDomainTrust <a name="ActiveDirectoryDomainTrust" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust google_active_directory_domain_trust}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer"></a>

```typescript
import { activeDirectoryDomainTrust } from '@cdktf/provider-google'

new activeDirectoryDomainTrust.ActiveDirectoryDomainTrust(scope: Construct, id: string, config: ActiveDirectoryDomainTrustConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig">ActiveDirectoryDomainTrustConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig">ActiveDirectoryDomainTrustConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetSelectiveAuthentication">resetSelectiveAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.putTimeouts"></a>

```typescript
public putTimeouts(value: ActiveDirectoryDomainTrustTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSelectiveAuthentication` <a name="resetSelectiveAuthentication" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetSelectiveAuthentication"></a>

```typescript
public resetSelectiveAuthentication(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ActiveDirectoryDomainTrust resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isConstruct"></a>

```typescript
import { activeDirectoryDomainTrust } from '@cdktf/provider-google'

activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformElement"></a>

```typescript
import { activeDirectoryDomainTrust } from '@cdktf/provider-google'

activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformResource"></a>

```typescript
import { activeDirectoryDomainTrust } from '@cdktf/provider-google'

activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.generateConfigForImport"></a>

```typescript
import { activeDirectoryDomainTrust } from '@cdktf/provider-google'

activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ActiveDirectoryDomainTrust resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActiveDirectoryDomainTrust to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActiveDirectoryDomainTrust that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ActiveDirectoryDomainTrust to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference">ActiveDirectoryDomainTrustTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.selectiveAuthenticationInput">selectiveAuthenticationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDnsIpAddressesInput">targetDnsIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDomainNameInput">targetDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustDirectionInput">trustDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustHandshakeSecretInput">trustHandshakeSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustTypeInput">trustTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.selectiveAuthentication">selectiveAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDnsIpAddresses">targetDnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDomainName">targetDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustDirection">trustDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustHandshakeSecret">trustHandshakeSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustType">trustType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.timeouts"></a>

```typescript
public readonly timeouts: ActiveDirectoryDomainTrustTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference">ActiveDirectoryDomainTrustTimeoutsOutputReference</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `selectiveAuthenticationInput`<sup>Optional</sup> <a name="selectiveAuthenticationInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.selectiveAuthenticationInput"></a>

```typescript
public readonly selectiveAuthenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetDnsIpAddressesInput`<sup>Optional</sup> <a name="targetDnsIpAddressesInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDnsIpAddressesInput"></a>

```typescript
public readonly targetDnsIpAddressesInput: string[];
```

- *Type:* string[]

---

##### `targetDomainNameInput`<sup>Optional</sup> <a name="targetDomainNameInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDomainNameInput"></a>

```typescript
public readonly targetDomainNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ActiveDirectoryDomainTrustTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>

---

##### `trustDirectionInput`<sup>Optional</sup> <a name="trustDirectionInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustDirectionInput"></a>

```typescript
public readonly trustDirectionInput: string;
```

- *Type:* string

---

##### `trustHandshakeSecretInput`<sup>Optional</sup> <a name="trustHandshakeSecretInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustHandshakeSecretInput"></a>

```typescript
public readonly trustHandshakeSecretInput: string;
```

- *Type:* string

---

##### `trustTypeInput`<sup>Optional</sup> <a name="trustTypeInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustTypeInput"></a>

```typescript
public readonly trustTypeInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `selectiveAuthentication`<sup>Required</sup> <a name="selectiveAuthentication" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.selectiveAuthentication"></a>

```typescript
public readonly selectiveAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetDnsIpAddresses`<sup>Required</sup> <a name="targetDnsIpAddresses" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDnsIpAddresses"></a>

```typescript
public readonly targetDnsIpAddresses: string[];
```

- *Type:* string[]

---

##### `targetDomainName`<sup>Required</sup> <a name="targetDomainName" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.targetDomainName"></a>

```typescript
public readonly targetDomainName: string;
```

- *Type:* string

---

##### `trustDirection`<sup>Required</sup> <a name="trustDirection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustDirection"></a>

```typescript
public readonly trustDirection: string;
```

- *Type:* string

---

##### `trustHandshakeSecret`<sup>Required</sup> <a name="trustHandshakeSecret" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustHandshakeSecret"></a>

```typescript
public readonly trustHandshakeSecret: string;
```

- *Type:* string

---

##### `trustType`<sup>Required</sup> <a name="trustType" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.trustType"></a>

```typescript
public readonly trustType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrust.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActiveDirectoryDomainTrustConfig <a name="ActiveDirectoryDomainTrustConfig" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.Initializer"></a>

```typescript
import { activeDirectoryDomainTrust } from '@cdktf/provider-google'

const activeDirectoryDomainTrustConfig: activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.domain">domain</a></code> | <code>string</code> | The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.targetDnsIpAddresses">targetDnsIpAddresses</a></code> | <code>string[]</code> | The target DNS server IP addresses which can resolve the remote domain involved in the trust. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.targetDomainName">targetDomainName</a></code> | <code>string</code> | The fully qualified target domain name which will be in trust with the current domain. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustDirection">trustDirection</a></code> | <code>string</code> | The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"]. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustHandshakeSecret">trustHandshakeSecret</a></code> | <code>string</code> | The trust secret used for the handshake with the target domain. This will not be stored. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustType">trustType</a></code> | <code>string</code> | The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"]. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#id ActiveDirectoryDomainTrust#id}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#project ActiveDirectoryDomainTrust#project}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.selectiveAuthentication">selectiveAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the trusted side has forest/domain wide access or selective access to an approved set of resources. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions of https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#domain ActiveDirectoryDomainTrust#domain}

---

##### `targetDnsIpAddresses`<sup>Required</sup> <a name="targetDnsIpAddresses" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.targetDnsIpAddresses"></a>

```typescript
public readonly targetDnsIpAddresses: string[];
```

- *Type:* string[]

The target DNS server IP addresses which can resolve the remote domain involved in the trust.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#target_dns_ip_addresses ActiveDirectoryDomainTrust#target_dns_ip_addresses}

---

##### `targetDomainName`<sup>Required</sup> <a name="targetDomainName" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.targetDomainName"></a>

```typescript
public readonly targetDomainName: string;
```

- *Type:* string

The fully qualified target domain name which will be in trust with the current domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#target_domain_name ActiveDirectoryDomainTrust#target_domain_name}

---

##### `trustDirection`<sup>Required</sup> <a name="trustDirection" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustDirection"></a>

```typescript
public readonly trustDirection: string;
```

- *Type:* string

The trust direction, which decides if the current domain is trusted, trusting, or both. Possible values: ["INBOUND", "OUTBOUND", "BIDIRECTIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#trust_direction ActiveDirectoryDomainTrust#trust_direction}

---

##### `trustHandshakeSecret`<sup>Required</sup> <a name="trustHandshakeSecret" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustHandshakeSecret"></a>

```typescript
public readonly trustHandshakeSecret: string;
```

- *Type:* string

The trust secret used for the handshake with the target domain. This will not be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#trust_handshake_secret ActiveDirectoryDomainTrust#trust_handshake_secret}

---

##### `trustType`<sup>Required</sup> <a name="trustType" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.trustType"></a>

```typescript
public readonly trustType: string;
```

- *Type:* string

The type of trust represented by the trust resource. Possible values: ["FOREST", "EXTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#trust_type ActiveDirectoryDomainTrust#trust_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#id ActiveDirectoryDomainTrust#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#project ActiveDirectoryDomainTrust#project}.

---

##### `selectiveAuthentication`<sup>Optional</sup> <a name="selectiveAuthentication" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.selectiveAuthentication"></a>

```typescript
public readonly selectiveAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the trusted side has forest/domain wide access or selective access to an approved set of resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#selective_authentication ActiveDirectoryDomainTrust#selective_authentication}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ActiveDirectoryDomainTrustTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#timeouts ActiveDirectoryDomainTrust#timeouts}

---

### ActiveDirectoryDomainTrustTimeouts <a name="ActiveDirectoryDomainTrustTimeouts" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.Initializer"></a>

```typescript
import { activeDirectoryDomainTrust } from '@cdktf/provider-google'

const activeDirectoryDomainTrustTimeouts: activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#create ActiveDirectoryDomainTrust#create}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#delete ActiveDirectoryDomainTrust#delete}. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#update ActiveDirectoryDomainTrust#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#create ActiveDirectoryDomainTrust#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#delete ActiveDirectoryDomainTrust#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/active_directory_domain_trust#update ActiveDirectoryDomainTrust#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActiveDirectoryDomainTrustTimeoutsOutputReference <a name="ActiveDirectoryDomainTrustTimeoutsOutputReference" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer"></a>

```typescript
import { activeDirectoryDomainTrust } from '@cdktf/provider-google'

new activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ActiveDirectoryDomainTrustTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.activeDirectoryDomainTrust.ActiveDirectoryDomainTrustTimeouts">ActiveDirectoryDomainTrustTimeouts</a>

---



