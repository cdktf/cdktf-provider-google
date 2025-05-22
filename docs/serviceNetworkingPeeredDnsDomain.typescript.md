# `serviceNetworkingPeeredDnsDomain` Submodule <a name="`serviceNetworkingPeeredDnsDomain` Submodule" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceNetworkingPeeredDnsDomain <a name="ServiceNetworkingPeeredDnsDomain" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/service_networking_peered_dns_domain google_service_networking_peered_dns_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer"></a>

```typescript
import { serviceNetworkingPeeredDnsDomain } from '@cdktf/provider-google'

new serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain(scope: Construct, id: string, config: ServiceNetworkingPeeredDnsDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig">ServiceNetworkingPeeredDnsDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig">ServiceNetworkingPeeredDnsDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: ServiceNetworkingPeeredDnsDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetService"></a>

```typescript
public resetService(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceNetworkingPeeredDnsDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isConstruct"></a>

```typescript
import { serviceNetworkingPeeredDnsDomain } from '@cdktf/provider-google'

serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformElement"></a>

```typescript
import { serviceNetworkingPeeredDnsDomain } from '@cdktf/provider-google'

serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformResource"></a>

```typescript
import { serviceNetworkingPeeredDnsDomain } from '@cdktf/provider-google'

serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.generateConfigForImport"></a>

```typescript
import { serviceNetworkingPeeredDnsDomain } from '@cdktf/provider-google'

serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServiceNetworkingPeeredDnsDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceNetworkingPeeredDnsDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceNetworkingPeeredDnsDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/service_networking_peered_dns_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceNetworkingPeeredDnsDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference">ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dnsSuffixInput">dnsSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dnsSuffix">dnsSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.timeouts"></a>

```typescript
public readonly timeouts: ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference">ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference</a>

---

##### `dnsSuffixInput`<sup>Optional</sup> <a name="dnsSuffixInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dnsSuffixInput"></a>

```typescript
public readonly dnsSuffixInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServiceNetworkingPeeredDnsDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a>

---

##### `dnsSuffix`<sup>Required</sup> <a name="dnsSuffix" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dnsSuffix"></a>

```typescript
public readonly dnsSuffix: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceNetworkingPeeredDnsDomainConfig <a name="ServiceNetworkingPeeredDnsDomainConfig" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.Initializer"></a>

```typescript
import { serviceNetworkingPeeredDnsDomain } from '@cdktf/provider-google'

const serviceNetworkingPeeredDnsDomainConfig: serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.dnsSuffix">dnsSuffix</a></code> | <code>string</code> | The DNS domain name suffix of the peered DNS domain. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.name">name</a></code> | <code>string</code> | Name of the peered DNS domain. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.network">network</a></code> | <code>string</code> | Network in the consumer project to peer with. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/service_networking_peered_dns_domain#id ServiceNetworkingPeeredDnsDomain#id}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.project">project</a></code> | <code>string</code> | The ID of the project that the service account will be created in. Defaults to the provider project configuration. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.service">service</a></code> | <code>string</code> | The name of the service to create a peered DNS domain for, e.g. servicenetworking.googleapis.com. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dnsSuffix`<sup>Required</sup> <a name="dnsSuffix" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.dnsSuffix"></a>

```typescript
public readonly dnsSuffix: string;
```

- *Type:* string

The DNS domain name suffix of the peered DNS domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/service_networking_peered_dns_domain#dns_suffix ServiceNetworkingPeeredDnsDomain#dns_suffix}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the peered DNS domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/service_networking_peered_dns_domain#name ServiceNetworkingPeeredDnsDomain#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Network in the consumer project to peer with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/service_networking_peered_dns_domain#network ServiceNetworkingPeeredDnsDomain#network}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/service_networking_peered_dns_domain#id ServiceNetworkingPeeredDnsDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project that the service account will be created in. Defaults to the provider project configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/service_networking_peered_dns_domain#project ServiceNetworkingPeeredDnsDomain#project}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of the service to create a peered DNS domain for, e.g. servicenetworking.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/service_networking_peered_dns_domain#service ServiceNetworkingPeeredDnsDomain#service}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServiceNetworkingPeeredDnsDomainTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/service_networking_peered_dns_domain#timeouts ServiceNetworkingPeeredDnsDomain#timeouts}

---

### ServiceNetworkingPeeredDnsDomainTimeouts <a name="ServiceNetworkingPeeredDnsDomainTimeouts" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.Initializer"></a>

```typescript
import { serviceNetworkingPeeredDnsDomain } from '@cdktf/provider-google'

const serviceNetworkingPeeredDnsDomainTimeouts: serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/service_networking_peered_dns_domain#create ServiceNetworkingPeeredDnsDomain#create}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/service_networking_peered_dns_domain#delete ServiceNetworkingPeeredDnsDomain#delete}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/service_networking_peered_dns_domain#read ServiceNetworkingPeeredDnsDomain#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/service_networking_peered_dns_domain#create ServiceNetworkingPeeredDnsDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/service_networking_peered_dns_domain#delete ServiceNetworkingPeeredDnsDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/service_networking_peered_dns_domain#read ServiceNetworkingPeeredDnsDomain#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference <a name="ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { serviceNetworkingPeeredDnsDomain } from '@cdktf/provider-google'

new serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceNetworkingPeeredDnsDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a>

---



