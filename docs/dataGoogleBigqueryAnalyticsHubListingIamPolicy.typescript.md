# `dataGoogleBigqueryAnalyticsHubListingIamPolicy` Submodule <a name="`dataGoogleBigqueryAnalyticsHubListingIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBigqueryAnalyticsHubListingIamPolicy <a name="DataGoogleBigqueryAnalyticsHubListingIamPolicy" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy google_bigquery_analytics_hub_listing_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.Initializer"></a>

```typescript
import { dataGoogleBigqueryAnalyticsHubListingIamPolicy } from '@cdktf/provider-google'

new dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy(scope: Construct, id: string, config: DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig">DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig">DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBigqueryAnalyticsHubListingIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleBigqueryAnalyticsHubListingIamPolicy } from '@cdktf/provider-google'

dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleBigqueryAnalyticsHubListingIamPolicy } from '@cdktf/provider-google'

dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleBigqueryAnalyticsHubListingIamPolicy } from '@cdktf/provider-google'

dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleBigqueryAnalyticsHubListingIamPolicy } from '@cdktf/provider-google'

dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleBigqueryAnalyticsHubListingIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBigqueryAnalyticsHubListingIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBigqueryAnalyticsHubListingIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBigqueryAnalyticsHubListingIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.dataExchangeIdInput">dataExchangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.listingIdInput">listingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.listingId">listingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `dataExchangeIdInput`<sup>Optional</sup> <a name="dataExchangeIdInput" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.dataExchangeIdInput"></a>

```typescript
public readonly dataExchangeIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listingIdInput`<sup>Optional</sup> <a name="listingIdInput" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.listingIdInput"></a>

```typescript
public readonly listingIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig <a name="DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleBigqueryAnalyticsHubListingIamPolicy } from '@cdktf/provider-google'

const dataGoogleBigqueryAnalyticsHubListingIamPolicyConfig: dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.dataExchangeId">dataExchangeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#data_exchange_id DataGoogleBigqueryAnalyticsHubListingIamPolicy#data_exchange_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.listingId">listingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#listing_id DataGoogleBigqueryAnalyticsHubListingIamPolicy#listing_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#id DataGoogleBigqueryAnalyticsHubListingIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#location DataGoogleBigqueryAnalyticsHubListingIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#project DataGoogleBigqueryAnalyticsHubListingIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.dataExchangeId"></a>

```typescript
public readonly dataExchangeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#data_exchange_id DataGoogleBigqueryAnalyticsHubListingIamPolicy#data_exchange_id}.

---

##### `listingId`<sup>Required</sup> <a name="listingId" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.listingId"></a>

```typescript
public readonly listingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#listing_id DataGoogleBigqueryAnalyticsHubListingIamPolicy#listing_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#id DataGoogleBigqueryAnalyticsHubListingIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#location DataGoogleBigqueryAnalyticsHubListingIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBigqueryAnalyticsHubListingIamPolicy.DataGoogleBigqueryAnalyticsHubListingIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/bigquery_analytics_hub_listing_iam_policy#project DataGoogleBigqueryAnalyticsHubListingIamPolicy#project}.

---



